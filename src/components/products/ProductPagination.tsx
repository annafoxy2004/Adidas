import { Box, Pagination } from "@mui/material";
import { useProducts } from "../../context/products/ProductsContextProvider";
import { LIMIT } from "../../helpers/consts";
import React from "react";
import { useSearchParams } from "react-router-dom";

export default function ProductPagination() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { page, setPage, pageTotalCount, getProducts } = useProducts();
  React.useEffect(() => {
    getProducts();
  }, [searchParams]);

  React.useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    setSearchParams({
      ...currentParams,
      _page: page.toString(),
      _limit: LIMIT.toString(),
    });
  }, [page]);

  return (
    <div>
      <Pagination
        page={+page}
        onChange={(e, val) => setPage(val)}
        count={pageTotalCount}
        variant="outlined"
      />
    </div>
  );
}
