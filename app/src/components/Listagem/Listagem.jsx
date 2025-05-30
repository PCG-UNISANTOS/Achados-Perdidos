import { useState } from "react";

import "../../assets/styles/_reset.css";
import "../../assets/styles/_variables.css";
import "../../assets/styles/index.css";
import "./Listagem.css";
import oculosImg from "../../assets/img/oculos.png";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

function Listagem() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <section className="listagem-section">
        <div className="container">
          <div className="header">
            <h1>Achados e Perdidos</h1>
          </div>
          <div className="content">
            <ul className="listagem">
              <li className="item">
                <div className="imagem-container">
                  <img src={oculosImg}></img>
                </div>
                <div className="descricao-item">
                  <h3>Acessório</h3>
                  <h2>Óculos de Grau Preto</h2>
                  <h4>28/04/2025</h4>
                  <p>Local: Sala Laboratório 5</p>
                  <Link className="button" to="/visualizar">
                    Visualizar
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Listagem;
