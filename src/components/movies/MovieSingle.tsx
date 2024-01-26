// type SingleMovieProp = {
//   id: string | undefined;
// };

import { MovieType } from "../../types/Types";
import "./movies.css";
type MovieSingleProps = {
  movie: MovieType;
};

function MovieSingle({ movie }: MovieSingleProps) {
  return (
    <div className="movie-container">
      <img src={movie.Poster}></img>
      <p>{movie.Title}</p>
      <p>{movie.Year}</p>
      <p>{movie.Genre}</p>
    </div>
  );
}

export default MovieSingle;
