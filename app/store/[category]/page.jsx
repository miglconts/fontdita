import CategoriesMenu from "@/components/store/CategoriesMenu";
import ProductsList from "@/components/store/ProductsList";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `CoderApp - ${params.category}`,
  };
}

const Productos = ({ params }) => {
  const { category } = params;

  return (
    <main className="container m-auto">
      <h2 className="text-2xl my-10 border-b border-orange-600  pb-4">Productos</h2>

      <div className="flex gap-10">
        <CategoriesMenu />
        <ProductsList category={category} />
      </div>
    </main>
  );
};

export default Productos;
