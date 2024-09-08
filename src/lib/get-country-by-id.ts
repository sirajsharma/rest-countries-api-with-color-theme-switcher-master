import { promises as fs } from "fs";

export async function getCountryById(
  countryId: string
): Promise<Country | string> {
  const file = await fs.readFile(`${process.cwd()}/src/app/data.json`);
  const data = JSON.parse(file as unknown as string) as Country[];

  const country = data.find(
    (country) => country.numericCode.toString() === countryId.toString()
  );

  if (typeof country === "undefined") {
    return "Country not found";
  }

  return country;
}
