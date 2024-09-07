"use client";
import { IonIcon } from "@ionic/react";
import { search as searchIcon } from "ionicons/icons";

import styles from "./styles/search.module.scss";

export function Search() {
  return (
    <div className={styles["search"]} role="search">
      <label className={styles["search__label"]} htmlFor="search" hidden>
        Search
      </label>
      <IonIcon
        icon={searchIcon}
        className={styles["search__icon"]}
        aria-hidden="true"
      />
      <input
        className={styles["search__input"]}
        id="search"
        name="search"
        placeholder="Search for a country..."
        type="text"
        aria-label="Search for a country"
      />
    </div>
  );
}
