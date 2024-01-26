import { LoaderFunction, useLoaderData } from "react-router-dom";
import getDetailMovie from "../../api/getDetailMovie";
import MovieSingle from "../../components/movies/MovieSingle";

// export async function MovieLoader({ params }: { params: { id: string } }) {
//   const { id } = params;
//   const movie = await getDetailMovie(id);
//   return movie;
// }

export const MovieLoader: LoaderFunction = async ({ params }) => {
  const { id } = params;
  const movie = await getDetailMovie(id);
  return movie;
};

const SingleMovie = () => {
  const movie = useLoaderData();
  return (
    <div>
      <MovieSingle movie={movie} />
    </div>
  );
};

export default SingleMovie;
