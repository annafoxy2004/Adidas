import ProductPagination from "../../components/products/ProductPagination";
import Product from "../../components/products/ProductList";
import React from "react";
import ProductFilter from "../../components/products/ProductFilter";
import SearchProduct from "../../components/products/SearchProduct";
//@ts-ignore
import cl from "../../assets/bg_cl.svg"

const ShopPage = () => {
  return (
    <>
      <div className="shopPage flex flex-col justify-center items-center">
      <img src={cl} alt="cl" />
        
        <SearchProduct />
        <ProductFilter />
        <Product />
      </div>
    </>
  );
};

export default ShopPage;
