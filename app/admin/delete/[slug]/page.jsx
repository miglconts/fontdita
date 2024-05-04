import { Button } from "@/components/ui/button";
import { db } from "@/firebase/config";
import { doc, deleteDoc } from "firebase/firestore";
import Link from "next/link";

export default function Delete({ params }) {
  const { slug } = params;

  deleteDoc(doc(db, "products", slug));
  return (
    <div className="container flex mx-auto flex-col">
      <h2 className="text-center font-black text-3xl text-orange-600">
        Producto Eliminado
      </h2>
      <Link href={`/admin`}>
        <Button className="self-center my-3">Volver</Button>
      </Link>
    </div>
  );
}
