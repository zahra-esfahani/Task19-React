import React from "react";
import styles from "./ProductsDetails.module.css"
function ProductDetails({ item }) {
  console.log(item);
  return (
    <>
      <div className={styles.parentItem}>
        <h3>{item.title}</h3>
        <img className={styles.image} src={item.image} alt="" />
        <p className={styles.detail}>{item.description}</p>
      </div>
    </>
  );
}

export default ProductDetails;
