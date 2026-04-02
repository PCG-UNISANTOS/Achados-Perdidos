import React from "react";
import logoDataWise from "../Arquitetura/Icones/logo/logo.png";
import { Link } from "react-router-dom";
import { FiSearch, FiSend, FiLogOut } from "react-icons/fi";
import { TiArrowRight } from "react-icons/ti";

const SideBar = () => {
  return (
    <aside className="sidebar">
      <div className="box-logo">
        <img
          src={logoDataWise}
          alt="Logotipo do grupo desenvolvedor do projeto DataWise Solutions"
        />
      </div>

      <ul className="listagem-opcoes">
        <li className="listagem-opcoes-item">
          <Link
            to="/listagem"
            title="Encontrar itens"
            className="listagem-opcoes-item__link active"
          >
            <FiSearch />
            <h5>Encontrar itens</h5>
            <TiArrowRight className="arrow-right" />
          </Link>
        </li>

        <li className="listagem-opcoes-item">
          <Link
            to=""
            title="Minhas solicitações"
            className="listagem-opcoes-item__link"
          >
            <FiSend />
            <h5>Solicitações</h5>
            <TiArrowRight className="arrow-right" />
          </Link>
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

        <button>
          <FiLogOut />
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
