"use client";
import { useState } from "react";
import Counter from "@/ui/Counter";
import { Button } from "../ui/button";

export default function Quantity({ item }) {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    console.log({
      ...item,
      quantity,
    });
  };

  return (
    <div className="flex flex-row gap-5 mt-6">
      <Counter max={5} counter={quantity} setCounter={setQuantity} />
      <Button
        variant="outline"
        className="w-full  hover:border-orange-600"
        onClick={handleAdd}
      >
        Agregar al carrito
      </Button>
    </div>
  );
}
