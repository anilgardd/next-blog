"use client";
import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/app/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <Image src="/moon.png" alt="" width={13} height={13} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { right: 3, backgroundColor: "#0f172a" }
            : { left: 3, backgroundColor: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="" width={13} height={13} />
    </div>
  );
};

export default ThemeToggle;
