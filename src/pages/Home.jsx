import { Link } from "react-router-dom";

import logo from "../Arquitetura/Icones/logo/logo.png";
import { FiBox, FiCheckCircle, FiShield } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <section className="home-section">
        <div className="home-section-container">
          <div className="box-logo">
            <img src={logo} alt="Logo Data Wise Solutions" />
          </div>

          <div className="box-texto">
            <h1>Achados e Perdidos</h1>
            <p>
              Sistema completo para gerenciar objetos perdidos e encontrados de
              forma simples e eficiente
            </p>

            <div className="box-texto__buttons">
              <Link to="/login" className="btn-login">
                Acessar sistema
              </Link>
              <Link to="/listagem" className="btn-listagem">
                Ver itens perdidos
              </Link>
            </div>
          </div>

          <ul className="listagem">
            <li className="listagem-item">
              <div className="box-icone">
                <FiBox />
              </div>
              <h3>Cadastro fácil</h3>
              <p>Cadastre itens perdidos de forma rápida e intuitiva</p>
            </li>

            <li className="listagem-item">
              <div className="box-icone">
                <FiCheckCircle />
              </div>
              <h3>Reivindicação simples</h3>
              <p>
                Processo simplificado para reivindicar objetos com verificação
                de identidade
              </p>
            </li>

            <li className="listagem-item">
              <div className="box-icone">
                <FiShield />
              </div>
              <h3>Seguro e confiável</h3>
              <p>
                Sistema seguro com validação de propriedade para proteger seus
                pertences
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
