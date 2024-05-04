import ProductDetail from "@/components/store/ProductDetail";


const DetailPage = ({ params }) => {
  const { slug } = params;

  return (
    <main className="container m-auto mt-10">
      <ProductDetail slug={slug} />
      
    </main>
  );
};

export default DetailPage;
