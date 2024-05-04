import ProductCard from "./ProductCard";

export default async function ProductsList({ category }) {
  const items = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/products/${category}`,
    { cache: "no-store" }
  ).then((r) => r.json());
  return (
    <section className="container m-auto flex justify-center  gap-3 flex-wrap">
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </section>
  );
}