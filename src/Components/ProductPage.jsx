import React from "react";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import ProductDetails from "./ProductDetails";
function ProductPage({ name }) {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const id = name[name.length - 1];
  const setLocalStorage = () => {
    const stringdData = JSON.stringify(item);
    localStorage.setItem("item", stringdData);
  };
  let item = JSON.parse(localStorage.getItem("item")) || [];
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetch(`https://fakestoreapi.com/products/${id}`);
        const res = await data.json();
        setProducts([res]);
        item.shift();
        item.push(res);
        setLocalStorage();
      } catch (error) {
        setIsLoading(true);
        console.log(error.message);
      }
    };
    fetchData();
    setIsLoading(false);
  }, [name]);

  return (
    <>
      {isLoading && <Loader />}
      <div>
        {products.map((item) => (
          <ProductDetails item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default ProductPage;
