import { useEffect, useState } from "react";

export function FetchProducts(url) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getProducts() {
      try {
        setIsLoading(true);
        setIsError(false);
        const fetchedProducts = await fetch(url);
        const json = await fetchedProducts.json();
        setProducts(json);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getProducts();
  }, [url]);
  return { products, isLoading, isError };
}
