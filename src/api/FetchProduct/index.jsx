import { API_BASE_URL } from "..";

export async function FetchProduct(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error("network error");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("product error:", error);
    throw error;
  }
}
