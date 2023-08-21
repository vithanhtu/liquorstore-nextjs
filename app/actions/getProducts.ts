import axios from "axios";

export async function fetchDataProducts() {
  try {
    const response = await axios.get(`http://localhost:3000/api/products`);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Request failed with status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Re-throw the error to be caught by the caller
  }
}
