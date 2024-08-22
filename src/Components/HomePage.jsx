import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import Loader from "./Loader";
import ProductPage from "./ProductPage";
function HomePage() {
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
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
        {tag === "DIV" ? (
          <ProductPage name={name} />
        ) : (
          <div className={styles.choose}>Please Choose product</div>
        )}
      </div>
    </>
  );
}

export default HomePage;
