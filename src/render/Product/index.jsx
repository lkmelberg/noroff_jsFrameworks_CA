import React from "react";
import { useParams } from "react-router-dom";
import { FetchProduct } from "../../api/FetchProduct";
import { API_BASE_URL } from "../../api";

export function Product() {
  const { product, isLoading, isError } = FetchProduct(API_BASE_URL);
  const { description, discountedPrice, id, imageUrl, title } = product;
  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }
  return (
    <>
      <div>Individual product page: {id}</div>
      <h1>{title}</h1>
    </>
  );
}
