import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            alt=""
            className={styles.image}
            width={50}
            height={50}
          />
          <h1 className={styles.logoText}>Lamablog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
          laborum reprehenderit qui illum fugit ducimus cumque suscipit, rerum
          minus ipsam, doloribus dignissimos reiciendis. Delectus incidunt
          laboriosam necessitatibus vero inventore possimus.
        </p>
        <div className={styles.icons}>
          <Image
            src="/facebook.png"
            alt=""
            width={18}
            height={18}
            className={styles.icon}
          />
          <Image
            src="/instagram.png"
            alt=""
            width={18}
            height={18}
            className={styles.icon}
          />
          <Image
            src="/tiktok.png"
            alt=""
            width={18}
            height={18}
            className={styles.icon}
          />
          <Image
            src="/youtube.png"
            alt=""
            width={18}
            height={18}
            className={styles.icon}
          />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.linkTitle}> Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.linkTitle}> Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.linkTitle}> Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
