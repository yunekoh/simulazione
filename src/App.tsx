import { useEffect } from "react";
import getDetailMovie from "./api/getDetailMovie";

function App() {
  getDetailMovie("tt0111161").then((res) => console.log(res));

  return (
    <>
      <div id="home-container">aa</div>
    </>
  );
}

export default App;
