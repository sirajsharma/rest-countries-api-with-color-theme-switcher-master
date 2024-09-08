import { data } from "@/data";

export async function getCountryById(
  countryId: string
): Promise<Country | string> {
  const country = data.find(
    (country) => country.numericCode.toString() === countryId.toString()
  ) as Country;

  if (typeof country === "undefined") {
    return "Country not found";
  }

  return country;
}
