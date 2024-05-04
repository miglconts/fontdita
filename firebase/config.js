// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import mockData from "../data/mockData";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
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
export const storage = getStorage(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Función que manda un array a firestore// es necesario un boton para llamar a la función
export async function addItemsToFB() {
  const collectionRef = collection(db, "products");
  for (let item of mockData) {
    // addDoc(collectionRef, item).then((response) => console.log(response.id));
    let newItem = await addDoc(collectionRef, item);
    console.log(`Nuevo producto creado con id => ${newItem.id}`);
  }
}

// Función que actualiza el id del documento  dentro de los dato es necesario usar un boton para llamar a la función
export async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "products"));
  const data = [];
  querySnapshot.forEach((document) => {
    const docRef = doc(db, "products", document.id);
    updateDoc(docRef, { id: document.id });

    // console.log(document.id, docRef);
  });
  // console.log(data);
  return data;
}
