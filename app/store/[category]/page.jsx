import CategoriesMenu from "@/components/store/CategoriesMenu";
import ProductsList from "@/components/store/ProductsList";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `Fontdita - ${params.category}`,
  };
}

export function generateStaticParams() {
  return [
    { category: "all" },
    { category: "Electronics" },
    { category: "Furniture" },
    { category: "Shoes" },
    { category: "Miscellaneous" },
  ];
}

export const revalidate = 3600;

export default function ProductosCategory({ params }) {
  const { category } = params;

  return (
    <main className="container m-auto">
      <h2 className="text-2xl my-10 border-b border-orange-600  pb-4">
        Productos
      </h2>

      <div className="flex gap-10">
        <CategoriesMenu />
        <ProductsList category={category} />
      </div>
    </main>
  );
}
