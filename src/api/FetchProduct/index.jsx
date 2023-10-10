import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

export function FetchProduct(url) {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function getProduct(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();

        setProduct(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getProduct(`${url}/${id}`);
  }, [id]);

  // if (isLoading || !product) {
  //   return <div>Loading</div>;
  // }

  // if (isError) {
  //   return <div>Error</div>;
  // }

  console.log(product);

  return { product, isLoading, isError };
}
