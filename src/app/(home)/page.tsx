import { getAllCountries } from "@/utils/get-all-countries";

import { Card, Dropdown, Search } from "./_components";

import styles from "./page.module.scss";

export default async function Home() {
  const countries = await getAllCountries();

  return (
    <main className={styles["home"]}>
      <section className={styles["home__filter"]}>
        <Search />
        <Dropdown />
      </section>
      <section className={styles["home__list"]} role="listbox">
        {countries.map((country) => (
          <Card key={country.numericCode} {...country} />
        ))}
      </section>
    </main>
  );
}
