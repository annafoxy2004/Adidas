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
    nav("/shop");
  };

  return (
    <div>
      <h2>Add form</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={product.title}
          placeholder="Title"
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
          type="text"
        />
        <input
          value={product.category}
          placeholder="Category"
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
          type="text"
        />
        <input
          value={product.description}
          placeholder="Description"
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
          type="text"
        />
        <input
          value={product.image}
          placeholder="Image"
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
          type="url"
        />
        <input
          value={product.price}
          placeholder="Price"
          onChange={(e) =>
            setProduct({ ...product, price: parseInt(e.target.value) })
          }
          type="number"
        />
        <button type="submit">
            add
        </button>
      </form>
    </div>
  );
};

export default AddShopPage;
