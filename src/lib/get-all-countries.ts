import { promises as fs } from "fs";

export async function getAllCountries(
  query?: string,
  region?: string
): Promise<Country[]> {
  const file = await fs.readFile(`public/data.json`);
  let data = JSON.parse(file as unknown as string) as Country[];

  if (query || region) {
    data = data.filter((country) => {
      if (query && region) {
        return (
          country.name.toLowerCase().includes(query.toLowerCase()) &&
          country.region === region
        );
      } else if (query && !region) {
        return country.name.toLowerCase().includes(query.toLowerCase());
      } else if (!query && region) {
        return country.region === region;
      }

      return true;
    });
  }

  return data;
}
