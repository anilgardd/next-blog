import React from "react";
import styles from "./pagination.module.css";

const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Next</button>
      <button className={styles.button}>Previous</button>
    </div>
  );
};

export default Pagination;
