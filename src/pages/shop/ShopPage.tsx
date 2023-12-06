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
      <img src={cl} alt="cl" />
      <div className="shopPage pl-32 pr-32">
        <div className="searchInp w-72 flex justify-between">

        <SearchProduct/>
        <ProductPagination />
        </div>
        
        <ProductFilter />
        <Product />
      </div>
    </>
  );
};

export default ShopPage;
