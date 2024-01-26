import { Link } from "react-router-dom";

import "./movies.css";
import { MovieType } from "../../types/Types";

type MovieGridProps = {
  movie: MovieType;
};

function MovieGrid({ movie }: MovieGridProps) {
  const { Title, imdbID, Poster } = movie;

  return (
    <Link to={`/${imdbID}`}>
      <div id="moviegrid-container">
        <div className="moviegrid-item">
          <p className="moviegrid-title">{Title}</p>
          <img className="moviegrid-image" src={Poster} alt="image" />
        </div>
      </div>
    </Link>
  );
}

export default MovieGrid;
