import { useState } from "react";

import "../../assets/styles/_reset.css";
import "../../assets/styles/_variables.css";
import "../../assets/styles/index.css";
import "./Visualizar.css";
import Header from "../Header/Header";
import oculosImg from "../../assets/img/oculos.png";
import { Link } from "react-router-dom";

function Visualizar() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <section className="visualizar-section">
        <div className="container">
          <div className="grid">
            <div className="box-imagem">
              <img src={oculosImg}></img>
            </div>
            <div className="box-conteudo">
              <h1>Item perdido #8562781</h1>
              <div className="tag">
                <h2>Acessório</h2>
              </div>
              <h3>Óculos de Grau Preto</h3>
              <p>
                Óculos preto da Marca Rayban na sala do laborátorio 5, no dia 05
                de março de 2025 depois das 19hrs. Ele tem um risco branco na
                aste direita.
              </p>
              <Link className="button-detalhes" to="/">
                Quero validar esse item
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Visualizar;
