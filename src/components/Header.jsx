import React from "react";
import { Link } from "react-router-dom";

import logo from "../Arquitetura/Icones/logo/logo.png";
import { FaHome, FaList } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="box-logo">
            <img src={logo} title="Logo Data Wise Solutions" />
          </div>

          <ul className="header-container-listagem">
            <li className="header-container-listagem__item">
              <Link className="link" to="/">
                <FaHome />
                Home
              </Link>
            </li>

            <li className="header-container-listagem__item">
              <Link className="link" to="/listagem">
                <FaList />
                Itens
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
