// products.context.tsx
import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useState,
} from "react";
import { IProductsValues, STATE, ACTION, IProduct } from "./products.types";
import axios from "axios";
import { API, LIMIT } from "../../helpers/consts";
import { IAuth } from "context/auth/auth.types";
import { useSearchParams } from "react-router-dom";

export const productsContext = createContext<IProductsValues | null>(null);

const INIT_STATE: STATE = {
  oneProduct: null,
  products: [],
  pageTotalCount: 1,
};

function reducer(state = INIT_STATE, action: ACTION): STATE {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    case "GET_TOTAL_PAGE_COUNT":
      return { ...state, pageTotalCount: action.payload };
    default:
      return state;
  }
}

export function useProducts() {
  const context = useContext(productsContext);
  if (!context) {
    throw new Error("Забыли обернуть");
  }
  return context;
}

const ProductsContextProvider: React.FC<IAuth> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get("_page") || 1);

  async function getProducts() {
    const { data, headers } = await axios.get(API + window.location.search);

    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });

    const totalCount = Math.ceil(headers["x-total-count"] / LIMIT);
    dispatch({
      type: "GET_TOTAL_PAGE_COUNT",
      payload: totalCount,
    });
  }

  async function addProduct(newProduct: IProduct) {
    await axios.post(API, newProduct);
    getProducts();
  }

  async function deleteProduct(id: string) {
    await axios.delete(API + "/" + id);
    getProducts();
  }

  async function editProduct(id: string, editedProduct: IProduct) {
    await axios.patch(API + "/" + id, editedProduct);
    getProducts();
  }

  async function getOneProduct(id: string) {
    const { data } = await axios.get(API + "/" + id);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    });
  }

  return (
    <productsContext.Provider
      value={{
        addProduct,
        getProducts,
        deleteProduct,
        getOneProduct,
        editProduct,
        products: state.products,
        oneProduct: state.oneProduct,
        pageTotalCount: state.pageTotalCount,
        page,
        setPage,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
