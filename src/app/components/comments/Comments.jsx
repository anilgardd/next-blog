import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>

      {status !== "authenticated" ? (
        <Link href="login">Login to write a comment.</Link>
      ) : (
        <div className={styles.write}>
          <textarea placeholder="write a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      )}

      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <div className={styles.userImage}>
              <Image
                src="/p1.jpeg"
                alt=""
                width={50}
                height={50}
                className={styles.avatar}
              />
            </div>
            <div className={styles.userInfo}>
              <span className={styles.userName}>John Doe</span>
              <span className={styles.date}>10.22.2023</span>
            </div>
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            libero molestiae, nostrum beatae totam cupiditate animi harum
            eveniet saepe doloremque!
          </p>
        </div>

        <div className={styles.comment}>
          <div className={styles.user}>
            <div className={styles.userImage}>
              <Image
                src="/p1.jpeg"
                alt=""
                width={50}
                height={50}
                className={styles.avatar}
              />
            </div>
            <div className={styles.userInfo}>
              <span className={styles.userName}>John Doe</span>
              <span className={styles.date}>10.22.2023</span>
            </div>
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            libero molestiae, nostrum beatae totam cupiditate animi harum
            eveniet saepe doloremque!
          </p>
        </div>

        <div className={styles.comment}>
          <div className={styles.user}>
            <div className={styles.userImage}>
              <Image
                src="/p1.jpeg"
                alt=""
                width={50}
                height={50}
                className={styles.avatar}
              />
            </div>
            <div className={styles.userInfo}>
              <span className={styles.userName}>John Doe</span>
              <span className={styles.date}>10.22.2023</span>
            </div>
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            libero molestiae, nostrum beatae totam cupiditate animi harum
            eveniet saepe doloremque!
          </p>
        </div>

        <div className={styles.comment}>
          <div className={styles.user}>
            <div className={styles.userImage}>
              <Image
                src="/p1.jpeg"
                alt=""
                width={50}
                height={50}
                className={styles.avatar}
              />
            </div>
            <div className={styles.userInfo}>
              <span className={styles.userName}>John Doe</span>
              <span className={styles.date}>10.22.2023</span>
            </div>
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            libero molestiae, nostrum beatae totam cupiditate animi harum
            eveniet saepe doloremque!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
