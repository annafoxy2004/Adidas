import ProductPagination from '../../components/products/ProductPagination';
import Product from '../../components/products/ProductList';
import React from 'react';
import ProductFilter from '../../components/products/ProductFilter';

const ShopPage = () => {
    return (
        <>
            <ProductFilter/>
            <Product/>
            <ProductPagination />
        </>
    );
};

export default ShopPage;