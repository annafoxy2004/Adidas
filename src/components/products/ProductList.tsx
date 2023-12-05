import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../../context/products/ProductsContextProvider";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/auth/AuthContextProvider";
import { useCartContext } from "../../context/cart/CartContextProvider";
import { Button } from "@mui/material";
import ProductLike from "./ProductLike";
import { getAuthUser, getUserRole } from "helpers/functions";
import { useFavoriteContext } from "../../context/favorites/FavoritesContextProvider";

const Product = () => {
  const { getProducts, products, deleteProduct, oneProduct } = useProducts();
  const {isAlreadyInFavorit, addProductToFavorite, deleteProductFromFavorite} = useFavoriteContext()
  const { addProductToCart, isAlreadyInCart, deleteProductFromCart } =
    useCartContext();
  const { currentUser } = useAuth();
  const nav = useNavigate();
  

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <p>Description: {product.description}</p>
          <img src={product.image} alt="img" />
          <p>Price: {product.price}</p>
          <p>Title: {product.title}</p>
          <p>Gender: {product.gender}</p>
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
<ProductLike product={product} productId={product.id}/>
          {currentUser && (
            <div>
              {isAlreadyInFavorit(+product.id!) ? (
                <button onClick={() => deleteProductFromFavorite(+product.id!)}>
                  delet on favorite
                </button>
              ) : (
                <button onClick={() => addProductToFavorite(product)}>
                  add to favorite
                </button>
              )}
            </div>
          )}
          <button onClick={() => deleteProduct(product.id!)}>Delete</button>
          <Link to={`/shop/details/${product.id}`}>
            <Button variant="contained" color="info" size="small">
              Details
            </Button>
          </Link>
          <Link to={`/shop/editshop/${product.id}`}>
            <button>Update</button>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Product;
