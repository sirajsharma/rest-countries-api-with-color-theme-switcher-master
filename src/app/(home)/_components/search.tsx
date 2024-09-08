"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { IonIcon } from "@ionic/react";
import { search as searchIcon } from "ionicons/icons";

import styles from "./styles/search.module.scss";

export function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);

    if (event.target.value) {
      params.set("query", event.target.value);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  };

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
        onChange={handleSearch}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
}
