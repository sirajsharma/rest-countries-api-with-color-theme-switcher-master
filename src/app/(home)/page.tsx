import { getAllCountries } from "@/lib/get-all-countries";

import { Card, Dropdown, Search } from "./_components";

import styles from "./page.module.scss";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    region?: string;
  };
}) {
  const countries = await getAllCountries(
    searchParams?.query,
    searchParams?.region
  );

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
