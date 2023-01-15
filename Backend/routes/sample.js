import { addDoc, getDocs } from "@firebase/firestore";
import {Router} from "express";
import { members } from "../firebase.js";

const router = Router();

//Create
router.post("/", async (req,res) => {
    try{

        const {Name, Course, Age} = req.body 
        const docRef = await addDoc(members,{
            Name: Name,
            Course: Course,
            Age: Age
        });
        res.status(200).send("Request Sent");
    } catch (e){
        console.log(e);
        res.status(400).send(e);
    }
});

//Read
router.get("/", async (req, res) => {
    try{

        const querySnapshot = await getDocs(members);
        const mappedRes = [];
        querySnapshot.forEach((doc) => {
            mappedRes.push(doc.data());
        })
        res.status(200).json(mappedRes);
    } catch(e) {
        console.log(e);
        res.status(400).send(e);
    }
})

//Delete


export default router;