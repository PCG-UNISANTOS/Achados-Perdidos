import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";
import { FaUser, FaCalendar } from "react-icons/fa";
import { BiSolidFileFind } from "react-icons/bi";
import SideBar from "../components/SideBar";
import Loading from "../components/Loading";
import { userMenu } from "../config/menu";

export default function SolicitacoesDetalhes() {
  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function carregarItens() {
      try {
      } catch (erro) {
      } finally {
      }
    }

    carregarItens();
  }, []);

  return (
    <>
      {loading && <Loading />}
      <section className="solicitacoes-detalhes-section">
        <SideBar items={userMenu} />
        <main className="solicitacoes-detalhes-section__conteudo">
          <div className="box-titulo">
            <h1>
              Solicitação de número: <span>#123456</span>
            </h1>
          </div>
          <div className="box-card">
            <div className="box-card-item">
              <div className="box-img">
                <img src="https://placehold.co/400x400"></img>
              </div>
              <ul className="box-infos">
                <li className="box-infos-item">
                  <h3>Nome do item:</h3>
                  <p>Exemplo de nome do item</p>
                </li>
                <li className="box-infos-item">
                  <h3>Data que foi perdido:</h3>
                  <p>01/01/2023</p>
                </li>

                <li className="box-infos-item">
                  <h3>Local onde foi perdido:</h3>
                  <p>Exemplo de local onde foi perdido</p>
                </li>
              </ul>
            </div>
            <div className="box-card-user">
              <h2>Informações do Solicitante</h2>

              <ul className="box-card-user-listagem">
                <li className="box-card-user-listagem__item">
                  <h3>
                    <span>Nome do solicitante:</span> Exemplo de nome
                  </h3>
                </li>

                <li className="box-card-user-listagem__item">
                  <h3>
                    <span>E-mail do solicitante:</span> exemplo@dominio.com
                  </h3>
                </li>
              </ul>
            </div>

            <div className="box-card-reivindicacao">
              <h2>Detalhes da Reivindicação</h2>

              <div className="box-card-reivindicacao__infos">
                <h3>Descrição do porque o item é do solicitante:</h3>
                <p>Descrição exemplo do porque o item é do solicitante</p>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
