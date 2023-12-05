import Product from "components/products/ProductList";
import { useCartContext } from "../../context/cart/CartContextProvider";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, getCart, deleteProductFromCart, decreaseCount, increaseCount } =
    useCartContext();

  useEffect(() => getCart(), []);

  if (cart.products.length < 1) {
    return (
      <div>
        <h3>Cart is empty</h3>
        <Link to={"/shop"}>
          <button>Go shop!</button>
        </Link>
      </div>
    );
  }

  console.log(cart.products);

  cart.products.map((row) => console.log(row.gender));

  return (
    <div>
      <h3>Cart</h3>
      <form>
        {cart.products.map((row) => (
          <div key={row.id}>
            <p>Title: {row.title}</p>
            <p>Gender: {row.gender}</p>
            <img src={row.image} alt="" />
            <p>Price one: {row.price}</p>
            <p>Price all: {row.subPrice}</p>
            <button
              onClick={() => {
                if (row.count <= 1) {
                  deleteProductFromCart(+row.id!);
                } else {
                  decreaseCount(+row.id!);
                }
              }}
            >
              -1
            </button>
            <p>{row.count}</p>
            <button onClick={() => increaseCount(+row.id!)}>+1</button>
          </div>
        ))}
        <h4>TOTAL: {cart.totalPrice}</h4>
        <button>ORDER</button>
      </form>
    </div>
  );
};

export default CartPage;
