// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import mockData from "../dataddd/mockData";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// export async function addItemsToFB() {
//   const collectionRef = collection(db, "products");
//   for (let item of mockData) {
//     // addDoc(collectionRef, item).then((response) => console.log(response.id));
//     let newItem = await addDoc(collectionRef, item);
//     console.log(`Nuevo producto creado con id => ${newItem.id}`);
//   }
// }
