import { Router } from "express";
import { campaign } from "../firebase.js";
import moment from "moment"
import { doc, setDoc, getDocs, getDoc } from "@firebase/firestore";

const router =  Router();

//Create 
router.post("/", async (req, res) => {
    try {
        const {
            make,
            start_date,
            offer_days,
            offer_amount,
        } = req.body;

        const campaign_id = make + start_date.split('-').join("");

        const docRef = await setDoc(doc(campaign, campaign_id), {
            campaign_id: campaign_id, 
            make : make,
            start_date : start_date,
            offer_days : offer_days,
            offer_amount : offer_amount
        })

        res.status(200).json("Campaign Created");
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
})

//Read
router.get("/", async (req,res) => {
    try {
        const querySnapshot = await getDocs(campaign);
        const mappedRes = [];
        querySnapshot.forEach((doc) => {
            var docData = doc.data();
            
            //unix time conversion
            docData.start_date = moment.unix(docData.start_date.seconds).format("YYYY-MM-DD");          

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
        const campaign_id = req.body.campaign_id;
        if (campaign_id == null){
            res.status(400).send("campaign id not found")
        }

        const querySnapshot = await getDoc(doc(campaign,campaign_id));
        const docData = querySnapshot.data();
        
        if (docData == null){
            res.status(404).send("Document not found");
        }

        docData.start_date = moment.unix(docData.start_date.seconds).format("YYYY-MM-DD");

        res.status(200).json(docData);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    } 
})


export default router; 