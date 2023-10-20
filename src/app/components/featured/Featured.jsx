import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hi, Anıl here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia,
            illum.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            pariatur minima odio incidunt illum, repudiandae illo nesciunt
            beatae aperiam, fugiat temporibus! Ea obcaecati, veritatis
            laudantium ullam quaerat cumque tenetur facilis facere
            necessitatibus assumenda magni quasi ipsa autem exercitationem
            aliquid iste fugiat, explicabo mollitia ducimus quisquam quis in
            optio. Enim, eum.
          </p>
          <button className={styles.button}> Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
