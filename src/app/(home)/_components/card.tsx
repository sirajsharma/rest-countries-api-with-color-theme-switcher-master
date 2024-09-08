import Image from "next/image";
import Link from "next/link";

import { Stat } from "@/components/stat";

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
  const stats = [
    {
      label: "Population",
      value: new Intl.NumberFormat().format(population),
    },
    {
      label: "Region",
      value: region,
    },
    {
      label: "Capital",
      value: capital,
    },
  ];

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
        {stats.map((stat) => (
          <Stat key={stat.label} {...stat} />
        ))}
      </section>
    </Link>
  );
}
