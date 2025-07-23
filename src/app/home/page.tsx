import React from "react";
import styles from "./Home.module.css";

export default function HomePage() {
  return (
    <main className={`min-h-screen flex flex-col items-center justify-center ${styles.container}`}>
      <h1 className={styles.title}>Welcome to the Home Page</h1>
      <p className={styles.subtitle}>This is your new home page. Customize it as you like!</p>
    </main>
  );
} 