import { NextResponse } from "next/server";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function GET(request, { params }) {
  const { slug } = params;
  const docRef = doc(db, "products", slug);
  const docSnapshot = await getDoc(docRef);
  // console.log(docSnapshot.data());

  return NextResponse.json(docSnapshot.data());
}
