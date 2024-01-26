import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/images/logo.png";

import "./header.css";

function Header() {
  const location = useLocation();

  return (
    <div id="header-container">
      <div id="left-section">
        {location.pathname !== "/" && <Link to="/">Torna indietro</Link>}
        <img id="logo" src={logo} alt="logo" width={100} />
      </div>
    </div>
  );
}

export default Header;
