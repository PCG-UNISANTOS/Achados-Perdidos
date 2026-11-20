import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";
import { FaUser, FaCalendar } from "react-icons/fa";
import { BiSolidFileFind } from "react-icons/bi";
import SideBar from "../components/SideBar";
import Loading from "../components/Loading";
import { userMenu, adminMenu } from "../config/menu";

export default function Solicitacoes() {
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
      <section className="solicitacoes-section">
        <SideBar items={userMenu} />
        <main className="solicitacoes-flex">
          <div className="solicitacoes-flex__header">
            <h1>Minhas Solicitações</h1>
          </div>

          <ul className="solicitacoes-flex__content">
            <li className="item">
              <div className="box-img">
                <img src="https://placehold.co/150x100"></img>
              </div>

              <div className="box-info-detalhe">
                <ul className="infos">
                  <li className="infos-item">
                    <BiSolidFileFind />
                    <h2>
                      <span>Nome do item:</span> Carteira de Identidade
                    </h2>
                  </li>
                  <li className="infos-item">
                    <FaCalendar />
                    <h2>
                      <span>Data da solicitação:</span> 20/05/2024
                    </h2>
                  </li>
                  <li className="infos-item">
                    <FaUser />
                    <h2>
                      <span>Solicitante:</span> Amanda Simões
                    </h2>
                  </li>
                </ul>
                <Link
                  to="/solicitacoes/detalhes/3"
                  className="redirect"
                  title="Ver detalhes"
                >
                  Ver detalhes
                  <CgDetailsMore />
                </Link>
              </div>
            </li>
          </ul>
        </main>
      </section>
    </>
  );
}
