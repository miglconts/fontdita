import EditForm from "@/components/admin/EditForm";

const EditPage = async ({ params }) => {
  const { slug } = params;
  const item = await fetch(`http://localhost:3000/api/detail/${slug}`, {
    cache: "no-store",
  }).then((res) => res.json());

  return (
    <div>
      <EditForm item={item} />
    </div>
  );
};

export default EditPage;
