import ProductPagination from '../../components/products/ProductPagination';
import Product from '../../components/products/ProductList';
import React from 'react';

const ShopPage = () => {
    return (
        <>
            <Product/>
            <ProductPagination />
        </>
    );
};

export default ShopPage;