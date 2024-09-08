"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { IonIcon } from "@ionic/react";
import { chevronDownOutline, chevronUpOutline } from "ionicons/icons";

import styles from "./styles/dropdown.module.scss";

const REGIONS = [
  "All",
  "Africa",
  "Americas",
  "Antarctic Ocean",
  "Antarctic",
  "Asia",
  "Europe",
  "Oceania",
  "Polar",
];

export function Dropdown() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleToggleDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setShowDropdown((prevState) => !prevState);
  };

  const handleItemClick = (region: string) => () => {
    const params = new URLSearchParams(searchParams);

    if (region) {
      region === "All" ? params.delete("region") : params.set("region", region);
    } else {
      params.delete("region");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <section
      className={styles["dropdown"]}
      role="listbox"
      aria-labelledby="dropdown-button"
    >
      <button
        className={styles["dropdown__button"]}
        id="dropdown-button"
        aria-expanded="false"
        aria-controls="dropdown-menu"
        onClick={handleToggleDropdown}
        ref={dropdownRef}
      >
        {searchParams.get("region")?.toString() ?? "Fitler by Region"}
        <IonIcon
          className={styles["dropdown__icon"]}
          icon={showDropdown ? chevronUpOutline : chevronDownOutline}
        />
      </button>
      {showDropdown && (
        <div
          className={styles["dropdown__menu"]}
          id="dropdown-menu"
          role="listbox"
          aria-labelledby="dropdown-button"
        >
          {REGIONS.map((region) => (
            <button
              className={styles["dropdown__item"]}
              key={region}
              onClick={handleItemClick(region)}
            >
              {region}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
