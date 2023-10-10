import React from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import { ProductCard } from "../ProductCard";
import { FetchProducts } from "../../api/FetchProducts";
import { API_BASE_URL } from "../../api";

export function Products() {
  const { products, isLoading, isError } = FetchProducts(API_BASE_URL);
  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <h1>This is several products</h1>
      <Flex wrap="wrap" justifyContent="center">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Flex>
    </>
  );
}
