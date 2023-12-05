import { Link, useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../context/products/ProductsContextProvider";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/auth/AuthContextProvider";
import { useCartContext } from "../context/cart/CartContextProvider";
import { Button } from "@mui/material";
import { saleTotalPrice } from "../helpers/functions";

const SalesPage = () => {
  const { getProducts, products, deleteProduct, getOneProduct, oneProduct } = useProducts();
  const { addProductToCart, isAlreadyInCart, deleteProductFromCart } =
    useCartContext();
  const { currentUser } = useAuth();

  const [product, setProduct] = useState({
    title: "",
    price: 0,
    image: "",
    description: "",
    gender: "",
    bishkek: "",
    astana: "",
    almaty: "",
    moscow: "",
    sale: "",
    discount:"",
    total: 0
  });

  const nav = useNavigate();
  const { id } = useParams();

          
            
            const saleProducts = products.filter((product) => product.sale === "on");
            
            return (
                <>
      {saleProducts.map((product) => (
          <div key={product.id}>
          <p>Description: {product.description}</p>
          <img src={product.image} alt={product.title} />
          <p>Price: {product.price}</p>
          <p>Title: {product.title}</p>
          {currentUser && (
            <div>
              {isAlreadyInCart(+product.id!) ? (
                <button onClick={() => deleteProductFromCart(+product.id!)}>
                  delete on cart
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

export default SalesPage;
