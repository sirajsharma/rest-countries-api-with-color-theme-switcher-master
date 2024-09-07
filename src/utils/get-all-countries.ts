import { promises as fs } from "fs";

export async function getAllCountries(): Promise<Country[]> {
  const file = await fs.readFile(`${process.cwd()}/data.json`);
  const data = JSON.parse(file as unknown as string) as Country[];
  return data;
}
