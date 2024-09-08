import { CSSProperties } from "react";
import styles from "./styles/stat.module.scss";

type StatProps = {
  label: string;
  value: string | number;
  style?: CSSProperties;
};

export function Stat({ label, value, style }: StatProps) {
  return (
    <p className={styles["stat"]} style={style}>
      <span className={styles["stat__label"]}>{label}:&nbsp;</span>
      {value ?? "N/A"}
    </p>
  );
}
