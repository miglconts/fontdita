"use client";

import { useState } from "react";
import Button from "@/ui/button";
import { db, storage } from "@/firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const updateProduct = async (id, values, file) => {
  let fileURL = values.images;

  if (file) {
    const storageRef = ref(storage, values.id);
    const fileSnapshot = await uploadBytes(storageRef, file);
    fileURL = await getDownloadURL(fileSnapshot.ref);
  }

  const docRef = doc(db, "products", id);
  return updateDoc(docRef, {
    title: values.title,
    description: values.description,
    inStock: 5,
    price: Number(values.price),
    category: { name: values.category },
    // images: [fileURL],
  }).then(() => console.log("Producto actualizado correctamente"));
};

const EditForm = ({ item }) => {
  const [values, setValues] = useState({
    title: item.title,
    description: item.description,
    inStock: item.inStock,
    price: item.price,
    category: item.category.name,
    image: item.image,
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateProduct(item.id, values, file);
  };

  return (
    <div className="container m-auto mt-6 ">
      <form onSubmit={handleSubmit} className="my-12">
        <label>Nombre: </label>
        <input
          type="text"
          value={values.title}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="title"
          onChange={handleChange}
        />

        <label>Imagen: </label>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="p-2 rounded w-full border border-blue-100 block my-4"
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
          value={values.category}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="category"
          onChange={handleChange}
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

export default EditForm;
