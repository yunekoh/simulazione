import axios from "axios";
import { api_key, api_url } from "./infoApi";

async function getDetailMovie(movieId: any) {
  try {
    const response = await axios.get(
      `${api_url}/?i=${movieId}&apikey=${api_key}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
}

export default getDetailMovie;
