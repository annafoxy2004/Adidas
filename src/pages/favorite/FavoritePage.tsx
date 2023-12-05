import { useAuth } from "../../context/auth/AuthContextProvider";
import { useFavoriteContext } from "../../context/favorites/FavoritesContextProvider";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cart/CartContextProvider";

const FavoritePage = () => {
  const { getFavorites, favorite, deleteProductFromFavorite} =
    useFavoriteContext();
  const { currentUser } = useAuth();
  const { addProductToCart, isAlreadyInCart, deleteProductFromCart } =
    useCartContext();

  useEffect(() => getFavorites(), []);

  if (favorite.products.length < 1) {
    return (
      <div>
        <h3>Favorite is empty</h3>
        <Link to={"/shop"}>
          <button>Go shop!</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h3>Favorites</h3>
      <form>
        {favorite.products.map((row) => (
          <div key={row.id}>
            <p>Title: {row.title}</p>
            <p>Gender: {row.gender}</p>
            <img src={row.image} alt="" />
            <p>Price one: {row.price}</p>
            {currentUser && (
              <div>
                {isAlreadyInCart(+row.id!) ? (
                  <button onClick={() => deleteProductFromCart(+row.id!)}>
                    delet on cart
                  </button>
                ) : (
                  <button onClick={() => addProductToCart(row)}>
                    add to cart
                  </button>
                )}
                <button
                  onClick={() => {
                    deleteProductFromFavorite(+row.id!);
                  }}
                >
                  delete on favorites
                </button>
              </div>
            )}
          </div>
        ))}
      </form>
    </div>
  );
};

export default FavoritePage;
