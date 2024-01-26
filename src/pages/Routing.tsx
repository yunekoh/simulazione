import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import AppLayout from "./Layout/AppLayout";
import SingleMovie from "./SingleMovie/SingleMovie";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/:id" element={<SingleMovie />} />
        </Route>
        <Route path="*" element={<h1>Errore 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
