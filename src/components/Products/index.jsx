import React, { useState, useEffect } from "react";
import { Flex, Input, Button } from "@chakra-ui/react";
import { FetchProducts } from "../../api/FetchProducts";
import { API_BASE_URL } from "../../api";
import { ProductCard } from "../ProductCard";

export function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const { products, isLoading, isError } = FetchProducts(API_BASE_URL);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(searchTerm === "" ? products : filteredProducts);
  }, [searchTerm, products]);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <Flex marginTop={"1rem"} justifyContent={"center"}>
        <Input
          borderColor={{ opacity: 0.8, color: "blue.500" }}
          size={"md"}
          _placeholder={{ opacity: 0.8, color: "blue.500" }}
          maxWidth="sm"
          type="text"
          placeholder="Search products by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button colorScheme="blue">Search</Button>
      </Flex>
      <Flex wrap="wrap" justifyContent="center">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Flex>
    </>
  );
}
