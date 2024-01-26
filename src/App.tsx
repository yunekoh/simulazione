import { RouterProvider } from "react-router-dom";
import "./assets/Global.css";

import { router } from "./pages/Routing";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
