import { useProducts } from "context/products/ProductsContextProvider";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditShopPage = () => {
  const { oneProduct, getOneProduct, editProduct } = useProducts();
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    image: "",
    category: "",
    description: "",
  });

  const nav = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id!);
  }, []);

  useEffect(() => {
    oneProduct && setProduct(oneProduct);
  }, [oneProduct]);

  const handleChange = (e: any) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
    console.log(product);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editProduct(id!, product);
    nav("/shop");
  };

  return (
    <div>
      <h2>Edit form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={product.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={product.category}
          placeholder="Category"
          onChange={handleChange}
        />
        <input
          type="text"
          value={product.description}
          placeholder="Description"
          onChange={handleChange}
        />
        <input
          type="url"
          value={product.image}
          placeholder="Image"
          onChange={handleChange}
        />
        <input
          type="number"
          value={product.price}
          placeholder="Price"
          onChange={handleChange}
        />
      </form>
      <button type="submit">Save</button>
    </div>
  );
};

export default EditShopPage;
