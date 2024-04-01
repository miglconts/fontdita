import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export async function getData() {
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/products?offset=5&limit=30"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export async function getItem(slug) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
