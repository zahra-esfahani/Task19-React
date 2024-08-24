import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import ProductPage from "./ProductPage";
import ProductDetails from "./ProductDetails";
function HomePage() {
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [storageItem, setStorageItem] = useState(false);
  let item = JSON.parse(localStorage.getItem("item")) || [];
  useEffect(() => {
   if(item.length!==0){
    setStorageItem(true)
   }
   else{
    setStorageItem(false)
   }
  }, []);

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
        {(!storageItem && !tag)&& (
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
