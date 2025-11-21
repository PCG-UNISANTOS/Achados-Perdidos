import React from "react";

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
              <a className="link" href="/">
                <FaHome />
                Home
              </a>
            </li>

            <li className="header-container-listagem__item">
              <a className="link" href="/listagem">
                <FaList />
                Itens
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
