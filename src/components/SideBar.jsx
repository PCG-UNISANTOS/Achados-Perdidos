import React, { useState } from "react";
import logoDataWise from "../Arquitetura/Icones/logo/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FiLogOut, FiMenu, FiX } from "react-icons/fi";
import { TiArrowRight } from "react-icons/ti";

const SideBar = ({ items, perfil = "Requisitante" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const nomeUsuario = localStorage.getItem("nomeUsuario") || "";

  // iniciais calculadas a partir do nome (em vez do "JF" fixo)
  const iniciais = nomeUsuario
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte[0].toUpperCase())
    .join("");

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  const navigate = useNavigate();
  const activeLink = ({ isActive }) =>
    isActive
      ? "listagem-opcoes-item__link active"
      : "listagem-opcoes-item__link";

  function onClickLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("nomeUsuario");
    localStorage.removeItem("idUsuario");
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
          {items.map(({ path, title, label, icon: Icon }) => (
            <li className="listagem-opcoes-item" key={path}>
              <NavLink to={path} title={title} className={activeLink}>
                <Icon className="search-icon" />
                <h5>{label}</h5>
                <TiArrowRight className="arrow-right" />
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="box-perfil">
          <div className="box-perfil__inicial">
            <h3>{iniciais}</h3>
          </div>

          <div className="box-perfil__detalhes">
            <h4>{nomeUsuario}</h4>
            <span>{perfil}</span>
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
