import { Router } from "express";
import { inventory } from "../firebase.js";
import moment from "moment"
import { doc, setDoc, getDocs, getDoc, Timestamp, updateDoc } from "@firebase/firestore";

const router =  Router();

router.post("/", async (req, res) => {
    try {
        const {
            sku,
            device_name,
            release_date,
            units_avail
        } = req.body;

        const release_timestamp = Timestamp.fromDate(new Date(release_date)); 
         
        const docRef = await setDoc(doc(inventory, sku), {
            sku : sku,
            device_name : device_name,
            release_date : release_timestamp,
            units_avail : units_avail,
        })
 
        res.status(200).json("Inventory item Created");  
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
})

//read
router.get("/", async (req,res) => {
    try {
        const querySnapshot = await getDocs(inventory);
        const mappedRes = [];
        querySnapshot.forEach((doc) => {        
            mappedRes.push(doc.data());
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
        const sku = req.body.sku;

        const querySnapshot = await getDoc(doc(inventory, sku));
        const docData = querySnapshot.data();
        
        if (docData == null){
            res.status(404).send("Document not found"); 
        }

        res.status(200).json(docData);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    } 
})


//Update 
router.put("/", async (req, res) => {
    try{
        const { sku, data } = req.body;

        const docRef = doc(inventory, sku);
        const updateStatus = await updateDoc(docRef, data);

        res.status(200).send("orders updated");
    } catch (e) { 
        console.log(e);
        res.status(400).send(e);
    }
})


export default router; 