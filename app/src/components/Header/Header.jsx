import { useState } from "react";

import "../../assets/styles/_reset.css";
import "../../assets/styles/_variables.css";
import "../../assets/styles/index.css";
import "./Header.css";

function Header() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="header-section">
        <div className="header-section-container">
          <ul className="header-section-container-lista">
            <li className="header-section-container-lista__item">
              <a href="/">Home</a>
            </li>
            <li className="header-section-container-lista__item">
              <a href="/">Listagem</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
