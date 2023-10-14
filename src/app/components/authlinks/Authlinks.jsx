import React from "react";
import styles from "./authlinks.module.css";
import Link from "next/link";

const Authlinks = () => {
  const status = "authenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );
};

export default Authlinks;
