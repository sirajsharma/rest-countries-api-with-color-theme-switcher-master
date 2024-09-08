import { data as rawData } from "@/data";

export async function getCountryByAlpha3Code(
  alpha3Code: string
): Promise<Country | string> {
  const country = rawData.find(
    (country) => country.alpha3Code === alpha3Code
  ) as Country;

  if (typeof country === "undefined") {
    return "Country not found";
  }

  return country;
}
