import Link from "next/link";

import { getCountryByAlpha3Code } from "@/lib/get-country-by-alpha3-code";

import styles from "./styles/border-link.module.scss";

type BorderLinkPorps = {
  alpha3Code: string;
};

export async function BorderLink({ alpha3Code }: BorderLinkPorps) {
  const country = await getCountryByAlpha3Code(alpha3Code);

  if (typeof country === "string") {
    return null;
  }

  return <Link href={`/country/${country.numericCode}`} className={styles.border}>{country.name}</Link>;
}
