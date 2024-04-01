import ProductCard from "./ProductCard";
import { getData } from "@/lib/utils";

export default async function ProductsList({ category }) {
  const data = await getData();
  const items =
    category === "all"
      ? data
      : data.filter((item) => item.category.name === category);

  return (
    <section className="container m-auto flex justify-center  gap-3 flex-wrap">
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </section>
  );
}
