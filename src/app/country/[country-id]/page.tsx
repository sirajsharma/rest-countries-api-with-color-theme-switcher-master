import { getCountryById } from "@/lib/get-country-by-id";

import { BackLink, Details, Flag } from "./_components";

import styles from "./page.module.scss";

export default async function Country({
  params,
}: {
  params: {
    "country-id": string;
  };
}) {
  const countryId = params["country-id"];

  const country = await getCountryById(countryId);

  if (typeof country === "string") {
    return <h1>{country}</h1>;
  }

  return (
    <main className={styles["country"]}>
      <BackLink />
      <article className={styles["country__info"]}>
        <Flag flag={country.flag} name={country.name} />
        <Details country={country} />
      </article>
    </main>
  );
}
