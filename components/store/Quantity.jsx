"use client";
import { useState } from "react";
import Counter from "@/ui/Counter";
import { Button } from "../ui/button";
import { useCartContext } from "@/app/context/cartContext";
import Link from "next/link";

export default function Quantity({ item }) {
  const { addToCart, isInCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);
  const handleAdd = () => {
    addToCart({
      ...item,
      quantity,
    });
  };

  return (
    <div className="flex flex-col gap-5 mt-6">
      {isInCart(item.id) ? (
        <Link
          href={"/cart"}
          className="rounded-lg py-2 px-4 bg-blue-600 text-white text-center"
        >
          Terminar mi compra
        </Link>
      ) : (
        <>
          <Counter max={5} counter={quantity} setCounter={setQuantity} />
          <Button className="w-full hover:bg-blue-600" onClick={handleAdd}>
            Agregar al carrito
          </Button>
        </>
      )}
    </div>
  );
}
