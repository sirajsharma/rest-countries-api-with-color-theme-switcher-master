"use client";

import Link from "next/link";
import { IonIcon } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";

import styles from "./styles/back-link.module.scss";

export function BackLink() {
  return (
    <Link className={styles["back"]} href="/">
      <IonIcon icon={arrowBackOutline} />
      Back
    </Link>
  );
}
