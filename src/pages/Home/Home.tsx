import { SimpleGrid } from "@chakra-ui/react";
import MoviesGrid from "../../components/movies/MovieGrid";
import getMovies from "../../api/getMovies";
import { useEffect, useState } from "react";

// type MovieGridProps = {
//   movie: MovieType;
// };

function Home() {
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((movies) => {
      setMovies(movies.Search);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading movies...</div>;
  }
  return (
    <div id="home-container">
      <div id="movies-container">
        <SimpleGrid minChildWidth="200px" spacing={5} spacingX="0px">
          {movies.map((movie) => (
            <MoviesGrid movie={movie} />
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
}

export default Home;
