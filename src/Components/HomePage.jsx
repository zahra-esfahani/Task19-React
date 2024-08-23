import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import Loader from "./Loader";
import ProductPage from "./ProductPage";
import ProductDetails from "./ProductDetails";
function HomePage() {
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [storageItem, setStorageItem] = useState(false);
  // useEffect(()=>{
  //   const fetchData=async()=>{
  //     const data=await fetch("https://fakestoreapi.com/products")
  //     const result=await data.json();
  //     setProducts(result.slice(0,4));

  //   }
  //   fetchData()
  // },[])
  let item = JSON.parse(localStorage.getItem("item")) || [];
  useEffect(() => {
   if(item.length!==0){
    setStorageItem(true)
   }
   else{
    setStorageItem(false)
   }
  }, []);
  console.log(storageItem);
  console.log(item);
  const clickHandler = (event) => {
    const { tagName } = event.target;
    setTag(tagName);
    const { innerText } = event.target;
    setName(innerText);
  };
  return (
    <>
      <div className={styles.parent}>
        <h2>Components with React</h2>
        <div className={styles.tabs} onClick={clickHandler}>
          <div>Product1</div>
          <div>Product2</div>
          <div>Product3</div>
          <div>Product4</div>
        </div>
        {tag === "DIV" && <ProductPage name={name} />}
        {!storageItem && (
          <div className={styles.choose}>Please Choose product</div>
        )}
        {tag ? null : (
          <div>
            {item.map((item) => (
              <ProductDetails item={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default HomePage;
