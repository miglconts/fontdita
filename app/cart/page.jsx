"use client";
import CartItem from "@/components/cart/CartItem";
import { useCartContext } from "../context/CartContext";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { cart, totalPrice } = useCartContext();

  return (
    <main className="container m-auto">
      <h2 className="text-2xl my-10 border-b pb-4">Tu compra</h2>
      <ul>
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>
      <div className="bg-black block">
        <p className="text-2xl my-4 border-b pb-4 bg-slate-300 ">
          Total: ${totalPrice()}
        </p>
      </div>
    </main>
  );
}
