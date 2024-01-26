import axios from "axios";

import { api_key, api_url } from "./infoApi";
async function getMovies() {
  try {
    const response = await axios.get(
      `${api_url}/?i=tt3896198&apikey=${api_key}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}

export default getMovies;
