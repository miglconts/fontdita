"use client";

import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/firebase/config";

const createProduct = async (values, categoryName, file) => {
  const storageRef = ref(storage, values.id);
  const fileSnapshot = await uploadBytes(storageRef, file);
  const fileURL = await getDownloadURL(fileSnapshot.ref);

  const docRef = doc(db, "products", values.id);
  return setDoc(docRef, {
    ...values,
    images: [fileURL],
    category: { name: categoryName },
  }).then(() => console.log("Producto creado exitosamente"));
};

const CreateForm = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    inStock: 0,
    price: 0,
    id: "",
  });
  const [file, setFile] = useState(null);
  const [categoryName, setCategoryName] = useState("");

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });

    console.log(categoryName);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProduct(values, categoryName, file);
  };

  return (
    <div className="container m-auto mt-6 ">
      <form onSubmit={handleSubmit} className="my-12">
        <label>Slug: </label>
        <input
          value={values.id}
          type="text"
          required
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="id"
          onChange={handleChange}
        />

        <label>Imagen: </label>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="p-2 rounded w-full border border-blue-100 block my-4"
        />

        <label>Nombre: </label>
        <input
          type="text"
          value={values.title}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="title"
          onChange={handleChange}
        />

        <label>Precio: </label>
        <input
          type="number"
          value={values.price}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="price"
          onChange={handleChange}
        />

        <label>Stock: </label>
        <input
          type="number"
          value={values.inStock}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="inStock"
          onChange={handleChange}
        />

        <label>Categoria: </label>
        <input
          type="text"
          value={categoryName}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="categoryName"
          onChange={(e) => setCategoryName(e.target.value)}
        />

        <label>Descripción: </label>
        <textarea
          value={values.description}
          className="resize-none w-full h-24 p-2 rounded border block border-blue-100 my-4"
          name="description"
          onChange={handleChange}
        />

        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-500 bg-orange-600 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
