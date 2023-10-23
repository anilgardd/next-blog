import Link from "next/link";
import React from "react";
import styles from ".//menuCategories.module.css";
const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.style}`}>
        style
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.fashion}`}>
        fashion
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>
        Food
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.travel}`}>
        travel
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.culture}`}>
        culture
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.coding}`}>
        coding
      </Link>
    </div>
  );
};

export default MenuCategories;
