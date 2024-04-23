"use client";
import Link from "next/link";
import { useCartContext } from "@/context/cartContext";
import Image from "next/image";
import CartIcon from "@/public/icons/cart-icon";

export default function CartWidget() {
  const { totalQty } = useCartContext();

  return (
    <Link
      href={"/cart"}
      className={`text-base text-orange-600 p-3 flex items-center`}
    >
      <CartIcon width={22} height={22} className="fill-orange-600 stroke-0" />
      <span>{totalQty()}</span>
    </Link>
  );
}
