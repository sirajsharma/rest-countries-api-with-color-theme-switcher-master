"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IonIcon } from "@ionic/react";
import { moonOutline, moonSharp } from "ionicons/icons";

import styles from "./styles/header.module.scss";

export default function Header() {
  const [colorScheme, setColorScheme] = useState("light");

  // Access localStorage only on the client side
  useEffect(() => {
    const storedColorScheme =
      window.localStorage.getItem("colorScheme") || "light";
    setColorScheme(storedColorScheme);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.colorScheme = colorScheme;
  }, [colorScheme]);

  const handleDarkMode = () => {
    const newColorScheme = colorScheme === "light" ? "dark" : "light";
    window.localStorage.setItem("colorScheme", newColorScheme);
    setColorScheme(newColorScheme);
  };

  return (
    <header className={styles["header"]}>
      <Link href="/" className={styles["header__link"]}>
        <h1 className={styles["header__heading"]}>Where in the world?</h1>
      </Link>
      <button
        className={styles["header__btn"]}
        onClick={handleDarkMode}
        type="button"
      >
        <IonIcon icon={colorScheme === "dark" ? moonSharp : moonOutline} /> Dark
        Mode
      </button>
    </header>
  );
}
