import { getCountryById } from "@/utils/get-country-by-id";

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

  return <h1>{country.name}</h1>;
}
