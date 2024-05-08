import LogoutButton from "@/components/admin/LogOut";
import ProductsTable from "@/components/admin/ProductsTable";

export default function Admin({}) {
  return (
    <main className="container flex flex-col m-auto mt-10">
      <LogoutButton />
      <h1 className="text-7xl text-orange-600 text-center  m-5">
        La página de admin
      </h1>
      <ProductsTable />
    </main>
  );
}
