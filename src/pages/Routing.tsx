import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import AppLayout from "./Layout/AppLayout";
import { HomeLoader } from "../pages/Home/Home";
import SingleMovie, { MovieLoader } from "./SingleMovie/SingleMovie";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        path: "home",
        element: <Home />,
        loader: HomeLoader,
      },

      {
        path: "home/:id",
        element: <SingleMovie />,
        loader: MovieLoader,
      },
    ],
  },
]);
