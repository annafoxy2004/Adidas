import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../../context/products/ProductsContextProvider";
import React, { useEffect } from "react";
import { useAuth } from "../../context/auth/AuthContextProvider";
import { useCartContext } from "../../context/cart/CartContextProvider";
import { Button } from "@mui/material";

const AlmatyProducts = () => {
  const { getProducts, products, deleteProduct } = useProducts();
  const { addProductToCart, isAlreadyInCart, deleteProductFromCart } =
    useCartContext();
  const { currentUser } = useAuth();
  const nav = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  const almatyProducts = products.filter((product) => product.almaty === "on");

  return (
    <>
      {almatyProducts.map((product) => (
        <div key={product.id}>
          <p>Description: {product.description}</p>
          <img src={product.image} alt={product.title} />
          <p>Price: {product.price}</p>
          <p>Title: {product.title}</p>
          {currentUser && (
            <div>
              {isAlreadyInCart(+product.id!) ? (
                <button onClick={() => deleteProductFromCart(+product.id!)}>
                  delet on cart
                </button>
              ) : (
                <button onClick={() => addProductToCart(product)}>
                  add to cart
                </button>
              )}
            </div>
          )}

          <Link to={`/shop/details/${product.id}`}>
            <Button variant="contained" color="info" size="small">
              Details
            </Button>
          </Link>
        </div>
      ))}
    </>
  );
};

export default AlmatyProducts;
