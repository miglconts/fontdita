import LogoutButton from "@/components/admin/LogOut";
import ProductsTable from "@/components/admin/ProductsTable";

export default function Admin({}) {
  return (
    <main className="container m-auto mt-10">
      <h1 className="text-7xl text-orange-600 text-center  ">
        La página de admin
      </h1>
      <ProductsTable />
      <LogoutButton />
    </main>
  );
}
