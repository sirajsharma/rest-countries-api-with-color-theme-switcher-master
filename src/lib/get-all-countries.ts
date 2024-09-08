import { data as rawData } from "@/data";

export async function getAllCountries(
  query?: string,
  region?: string
): Promise<Country[]> {
  let data = rawData as Country[];

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
