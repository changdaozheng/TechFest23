import { Router } from "express";
import { orders } from "../firebase.js";
import moment from "moment"
import { doc, setDoc, getDocs, getDoc, Timestamp } from "@firebase/firestore";

const router =  Router();

router.post("/", async (req, res) => {
    try {
        const {
            sku,
            device_name,
            units_ordered
        } = req.body;

        const current_time = new Date();
        const order_date =  Timestamp.fromDate(current_time); 


        const year = current_time.getFullYear();
        var month = current_time.getMonth() + 1;
        var day = current_time.getDate()

        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day; 
        
 
        const order_id = sku + year + month + day;

        const docRef = await setDoc(doc(orders, order_id), {
            order_id: order_id, 
            sku : sku,
            device_name: device_name,  
            order_date : order_date, 
            units_ordered : units_ordered,
            status : "Processing", //Initial status  
            delivered_date: null 
        })
 
        res.status(200).json("Order Created");  
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
})

//read
router.get("/", async (req,res) => {
    try {
        const querySnapshot = await getDocs(orders);
        const mappedRes = [];
        querySnapshot.forEach((doc) => {
            var docData = doc.data();
            
            //unix time conversion
            docData.order_date = moment.unix(docData.order_date.seconds).format("YYYY-MM-DD");
            
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
        const order_id = req.body.order_id;

        const querySnapshot = await getDoc(doc(orders, order_id));
        const docData = querySnapshot.data();
        
        if (docData == null){
            res.status(404).send("Document not found"); 
        }

        docData.order_date = moment.unix(docData.order_date.seconds).format("YYYY-MM-DD");

        res.status(200).json(docData);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    } 
})


//Update 
router.put("/", async (req, res) => {
    try{
        const { order_id, data } = req.body;

        const docRef = doc(orders, order_id);
        const updateStatus = await updateDoc(docRef, data);

        res.status(200).send("orders updated");
    } catch (e) { 
        console.log(e);
        res.status(400).send(e);
    }
})


export default router; 