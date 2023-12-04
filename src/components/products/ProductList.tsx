import { Link } from "react-router-dom";
import { useProducts } from "../../context/products/ProductsContextProvider";
import React, { useEffect } from "react";

const Product = () => {
  const { getProducts, products, deleteProduct } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <p>Category: {product.category}</p>
          <p>Description: {product.description}</p>
          <img src={product.image} alt={product.title} />
          <p>Price: {product.price}</p>
          <p>Title: {product.title}</p>
          <button onClick={() => deleteProduct(product.id!)}>Delete</button>
          <Link to={`/shop/editshop/${product.id}`}>
            <button>Update</button>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Product;
