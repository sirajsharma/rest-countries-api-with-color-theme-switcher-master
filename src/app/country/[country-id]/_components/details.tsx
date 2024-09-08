import { Stat } from "@/components/stat";

import { BorderLink } from "./border-link";

import styles from "./styles/details.module.scss";

type DetailsProps = {
  country: Country;
};

export function Details({ country }: DetailsProps) {
  const stats1 = [
    {
      label: "Native Name",
      value: country.nativeName,
    },
    {
      label: "Population",
      value: new Intl.NumberFormat().format(country.population),
    },
    {
      label: "Region",
      value: country.region,
    },
    {
      label: "Sub Region",
      value: country.subregion,
    },
    {
      label: "Capital",
      value: country.capital,
    },
  ];

  const stats2 = [
    { label: "Top Level Domain", value: country.topLevelDomain.join(", ") },
    {
      label: "Currencies",
      value: country.currencies.map((currency) => currency.name).join(", "),
    },
    {
      label: "Languages",
      value: country.languages.map((language) => language.name).join(", "),
    },
  ];

  return (
    <section className={styles["details"]}>
      <h2 className={styles["details__heading"]}>{country.name}</h2>
      <section
        className={`${styles["details__stats"]} ${styles["details__stats--one"]}`}
      >
        {stats1.map((stat) => (
          <Stat key={stat.label} {...stat} />
        ))}
      </section>
      <section
        className={`${styles["details__stats"]} ${styles["details__stats--two"]}`}
      >
        {stats2.map((stat) => (
          <Stat key={stat.label} {...stat} />
        ))}
      </section>

      <section className={styles["details__borders"]}>
        <h3 className={styles["details__subheading"]}>Border Countries:</h3>

        {typeof country.borders === "undefined"
          ? "N/A"
          : country?.borders?.map((alpha3Code) => (
              <BorderLink alpha3Code={alpha3Code} key={alpha3Code} />
            ))}
      </section>
    </section>
  );
}
