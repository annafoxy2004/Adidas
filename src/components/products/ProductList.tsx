import { Link } from "react-router-dom";
import { useProducts } from "../../context/products/ProductsContextProvider";
import React, { useEffect } from "react";
import { useAuth } from "../../context/auth/AuthContextProvider";
import { useCartContext } from "../../context/cart/CartContextProvider";

const Product = () => {
  const { getProducts, products, deleteProduct } = useProducts();
  const { addProductToCart, isAlreadyInCart, deleteProductFromCart } =
    useCartContext();
  const { currentUser } = useAuth();

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
          {currentUser && (
            <div>
              {isAlreadyInCart(+product.id!) ? (
                <button onClick={() => deleteProductFromCart(+product.id!)}>delet on cart</button>
              ) : (
                <button onClick={() => addProductToCart(product)}>add to cart</button>
              )}
            </div>
          )}
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
