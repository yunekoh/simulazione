import { SimpleGrid } from "@chakra-ui/react";
import MoviesGrid from "../../components/movies/MovieGrid";
import getMovies from "../../api/getMovies";
import { useLoaderData } from "react-router-dom";
import { MovieType } from "../../types/Types";
import getDetailMovie from "../../api/getDetailMovie";

export async function HomeLoader() {
  const movies = await getMovies();
  return movies.Search;
}

function Home() {
  const movies = useLoaderData() as MovieType[];
  return (
    <div id="home-container">
      <div id="movies-container">
        <SimpleGrid minChildWidth="200px" spacing={5} spacingX="0px">
          {movies.map((movie: MovieType) => (
            <MoviesGrid key={movie.imdbID} movie={movie} />
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
}

export default Home;
