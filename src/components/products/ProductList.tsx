import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../../context/products/ProductsContextProvider";
import React, { useEffect } from "react";
import { useAuth } from "../../context/auth/AuthContextProvider";
import { useCartContext } from "../../context/cart/CartContextProvider";
import { Button } from "@mui/material";
import { useFavoriteContext } from "../../context/favorites/FavoritesContextProvider";

const Product = () => {
  const { getProducts, products, deleteProduct } = useProducts();
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
