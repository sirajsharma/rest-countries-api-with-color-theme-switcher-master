import axios from "axios";
import { getAllCountries } from "./get-all-countries";

async function getEmbeddings(text: string | Country) {
  const response = await axios.post(
    "https://api.openai.com/v1/embeddings",
    {
      model: "text-embedding-ada-002",
      input: text,
    },
    {
      headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
    }
  );
  return response.data.data[0].embedding;
}

async function search(query: string, data: Country[]) {
  const queryEmbedding = await getEmbeddings(query);

  const dataEmbeddingsPromises = data.map((item) =>
    getEmbeddings(JSON.stringify(item))
  );
  const dataEmbeddings = await Promise.all(dataEmbeddingsPromises);

  // Compute cosine similarities
  const similarities = dataEmbeddings.map((embedding, index) => ({
    item: data[index],
    similarity: cosineSimilarity(queryEmbedding, embedding),
  }));

  // Sort by similarity
  similarities.sort((a, b) => b.similarity - a.similarity);

  return similarities.map((item) => item.item);
}

function cosineSimilarity(vecA: unknown, vecB: unknown) {
  const dotProduct = vecA.reduce(
    (sum, value, index) => sum + value * vecB[index],
    0
  );
  const magnitudeA = Math.sqrt(
    vecA.reduce((sum, value) => sum + value * value, 0)
  );
  const magnitudeB = Math.sqrt(
    vecB.reduce((sum, value) => sum + value * value, 0)
  );
  return dotProduct / (magnitudeA * magnitudeB);
}

export async function getSearchResults(text: string) {
  const data = await getAllCountries();
  const results = await search(text, data);
  return results;
}
