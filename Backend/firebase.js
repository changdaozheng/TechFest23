import { initializeApp } from "firebase/app";
import { getFirestore, collection} from "firebase/firestore";
import { firebaseConfig } from "./firebase_config.js";

const app = initializeApp(firebaseConfig);
const db =  getFirestore(app);

export const members = collection(db, "members"); 