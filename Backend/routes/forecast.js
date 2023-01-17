import {doc, setDoc, Timestamp, getDoc, getDocs, updateDoc } from "@firebase/firestore";
import { Router } from "express";
import { forecast } from "../firebase.js";
import moment from "moment"

const router =  Router();

//Create 
router.post("/", async (req, res) => {
    try {
        const {
            sku, 
            make, 
            device_name, 
            status, 
            status_note, 
            start_date, 
            end_date, 
            forecast_qty, 
            actual_qty
        } = req.body;

        const id = sku + start_date.split('-').join("") + end_date.split('-').join("")
        const start_timestamp = Timestamp.fromDate(new Date(start_date)); 
        const end_timestamp = Timestamp.fromDate(new Date(end_date)); 

        const docRef = await setDoc(doc(forecast, id), {
            id : id,
            sku : sku,
            make : make,
            device_name : device_name,
            status : status,
            status_note : status_note,
            start_date : start_timestamp,
            end_date : end_timestamp,
            forecast_qty : forecast_qty,
            actual_qty : actual_qty
        })

        res.status(200).json("Forecast Created");
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
})


//Read 
router.get("/", async (req,res) => {
    try {
        const querySnapshot = await getDocs(forecast);
        const mappedRes = [];
        querySnapshot.forEach((doc) => {
            var docData = doc.data();
            
            //unix time conversion
            docData.start_date = moment.unix(docData.start_date.seconds).format("YYYY-MM-DD");
            docData.end_date = moment.unix(docData.end_date.seconds).format("YYYY-MM-DD");
            
            mappedRes.push(docData)
        });

        res.status(200).json(mappedRes);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
})

//Read One
router.get("/doc", async (req,res) => {
    try {
        const id = req.body.id;

        const querySnapshot = await getDoc(doc(forecast,id));
        const docData = querySnapshot.data();
        
        if (docData == null){
            res.status(404).send("Document not found");
        }

        docData.start_date = moment.unix(docData.start_date.seconds).format("YYYY-MM-DD");
        docData.end_date = moment.unix(docData.end_date.seconds).format("YYYY-MM-DD");

        res.status(200).json(docData);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    } 
})

//Update 
router.put("/", async (req, res) => {
    try{
        const { id, data } = req.body;

        const docRef = doc(forecast, id);
        const updateStatus = await updateDoc(docRef, data);

        res.status(200).send("forecast updated");
    } catch (e) { 
        console.log(e);
        res.status(400).send(e);
    }
})


export default router;