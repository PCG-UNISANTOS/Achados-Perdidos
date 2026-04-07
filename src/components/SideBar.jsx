import React, { useState } from "react";
import logoDataWise from "../Arquitetura/Icones/logo/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FiSearch, FiSend, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import { TiArrowRight } from "react-icons/ti";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  const navigate = useNavigate();
  const activeLink = ({ isActive }) =>
    isActive
      ? "listagem-opcoes-item__link active"
      : "listagem-opcoes-item__link";

  function onClickLogout() {
    console.log("Logout realizado!");
    navigate("/login");
  }

  return (
    <>
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="box-logo">
          <img
            src={logoDataWise}
            alt="Logotipo do grupo desenvolvedor do projeto DataWise Solutions"
          />
        </div>

        <ul className="listagem-opcoes">
          <li className="listagem-opcoes-item">
            <NavLink
              to="/listagem"
              title="Encontrar itens"
              className={activeLink}
            >
              <FiSearch className="search-icon" />
              <h5>Encontrar itens</h5>
              <TiArrowRight className="arrow-right" />
            </NavLink>
          </li>

          <li className="listagem-opcoes-item">
            <NavLink
              to="/solicitacoes"
              title="Minhas solicitações"
              className={activeLink}
            >
              <FiSend className="search-icon" />
              <h5>Solicitações</h5>
              <TiArrowRight className="arrow-right" />
            </NavLink>
          </li>
        </ul>

        <div className="box-perfil">
          <div className="box-perfil__inicial">
            <h3>JF</h3>
          </div>

          <div className="box-perfil__detalhes">
            <h4>João Falcão</h4>
            <span>Requisitante</span>
          </div>

          <button
            className="logout-button"
            onClick={onClickLogout}
            title="Sair"
          >
            <FiLogOut />
          </button>
        </div>
      </aside>

      <button
        className={`menu-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
    </>
  );
};

export default SideBar;
