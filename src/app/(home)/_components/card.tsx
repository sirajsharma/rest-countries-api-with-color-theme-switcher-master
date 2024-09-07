import Image from "next/image";
import Link from "next/link";

import styles from "./styles/card.module.scss";

type CardProps = {
  capital: string;
  flag: string;
  name: string;
  numericCode: string;
  population: number;
  region: string;
};

export function Card({
  capital,
  flag,
  name,
  numericCode,
  population,
  region,
}: CardProps) {
  return (
    <Link
      href={`/country/${numericCode}`}
      role="article"
      className={styles["card"]}
    >
      <Image
        className={styles["card__image"]}
        src={flag}
        alt="name"
        width={342}
        height={203}
      />
      <section className={styles["card__content"]}>
        <h2 className={styles["card__heading"]}>{name}</h2>
        <p className={styles["card__detail"]}>
          <span className={styles["card__stat"]}>Population:&nbsp;</span>
          {population}
        </p>
        <p className={styles["card__detail"]}>
          <span className={styles["card__stat"]}>Region:&nbsp;</span>
          {region}
        </p>
        <p className={styles["card__detail"]}>
          <span className={styles["card__stat"]}>Capital:&nbsp;</span>
          {capital}
        </p>
      </section>
    </Link>
  );
}
