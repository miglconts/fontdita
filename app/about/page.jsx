"use client";
// import { addItemsToFB, fetchDataFromFirestore } from "../../firebase/config";
import { Button } from "@/components/ui/button";
export default function page() {
  return (
    <main className="container m-auto mt-10">
      <h1 className="text-7xl text-orange-600 text-center  ">
        La página de About
      </h1>
      {/* <Button onClick={addItemsToFB}>Enviar</Button>
      <Button onClick={fetchDataFromFirestore}>Enviar ID</Button> */}
    </main>
  );
}
