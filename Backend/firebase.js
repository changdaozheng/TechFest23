import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { firebaseConfig } from "./firebase_config.js"; 

const app = initializeApp(firebaseConfig);
const db =  getFirestore(app);

export const members = collection(db, "members"); 
export const forecast = collection(db, "forecast");
export const inventory = collection(db, "inventory");
export const campaign = collection(db, "campaign");
export const orders = collection(db, "orders");