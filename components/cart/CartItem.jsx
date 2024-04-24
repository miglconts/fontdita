"use client";
import { Button } from "@/ui/button";
import Image from "next/image";
import { useCartContext } from "../../app/context/CartContext";

export default function CartItem({ item }) {
  const { removeItem } = useCartContext();
  function handleRemove(slug) {
    console.log(slug);
    removeItem(slug);
  }

  return (
    <li className="shadow flex justify-between items-center  gap-6 p-4 my-4">
      <Image
        src={`${item.images[0]}`}
        alt={item.title}
        width={80}
        height={80}
      />
      <div>
        <h3>{item.title}</h3>
        <p className="text-sm font-semibold">${item.price * item.quantity}</p>
        <p className="text-sm">Cantidad: {item.quantity}</p>
      </div>

      <Button onClick={() => handleRemove(item.id)} className="bg-red-600">
        X
      </Button>
    </li>
  );
}
