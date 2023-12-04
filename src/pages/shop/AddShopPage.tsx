import { notify } from "../../components/alerts/Toastify";
import { useProducts } from "../../context/products/ProductsContextProvider";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddShopPage = () => {
  const { addProduct } = useProducts();
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    image: "",
    category: "",
    description: "",
  });

//   const handleChange = (e: any) => {
//     setProduct({
//       ...product,
//       [e.target.name]: e.target.value,
//     });
//     console.log(product);
//   };

  const nav = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !product.title.trim() ||
      !product.price ||
      !product.category.trim() ||
      !product.description.trim() ||
      !product.image.trim()
    ) {
      notify("Заполните поля!");
      return;
    }
    addProduct(product);
    nav("/");
  };

  return <div>
    <h2>Add form</h2>
    <form onSubmit={handleSubmit}>
    <input
          value={product.title}
          placeholder="Title"
          onChange={(e) =>
            setProduct({ ...product, title: e.target.value })
          }
          type="text"
        />
    </form>
  </div>;
};

export default AddShopPage;