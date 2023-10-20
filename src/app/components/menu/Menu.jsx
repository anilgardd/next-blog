import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPost from "../menuPosts/MenuPost";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      {/* EDITORS PICK */}
      <h2 className={styles.subTitle}>{"Chosen by the editor"}</h2>
      <h1 className={styles.title}>{"Editor's Pick"}</h1>
      <MenuPost withImage={false} />
      {/* CATEGORIES  */}
      <h2 className={styles.subTitle}>Discover by Topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      <h2 className={styles.subTitle}>{"What's Hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPost withImage={true} />
    </div>
  );
};

export default Menu;
