import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function GET(request, { params }) {
  const { category } = params;
  const productsRef = collection(db, "products");

  const q =
    category === "all"
      ? productsRef
      : query(productsRef, where("category.name", "==", category));

  const querySnapshot = await getDocs(q);

  const doc = querySnapshot.docs.map((doc) => doc.data());

  // revalidatePath("/products/[category]");
  console.log(doc);

  return NextResponse.json(doc);
}
