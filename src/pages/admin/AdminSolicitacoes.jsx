import { useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import { adminMenu } from "../../config/menu";

import { MdOutlineFormatListBulleted } from "react-icons/md";
import { TbArrowsExchange } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function AdminSolicitacoes() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      {/* {loading && <Loading />} */}
      <section className="admin-container-section">
        <SideBar items={adminMenu} perfil="Administrador" />
        <main className="admin-container-section-conteudo">
          <header className="admin-container-section-conteudo__header">
            <h1>Perfil Administrador: Listagem de Solicitações</h1>
          </header>

          <ul className="listagem-solicitacoes">
            <li className="listagem-solicitacoes-item">
              <div className="box-icone">
                <MdOutlineFormatListBulleted />
              </div>
              <div className="box-item">
                <h3>Nome do item</h3>
              </div>

              <div className="box-solicitante">
                <h3>Nome do Solicitante</h3>
              </div>

              <Link className="box-acoes">
                <span>Validar solicitação</span>
                <TbArrowsExchange />
              </Link>
            </li>

            <li className="listagem-solicitacoes-item">
              <div className="box-icone">
                <MdOutlineFormatListBulleted />
              </div>
              <div className="box-item">
                <h3>Nome do item</h3>
              </div>

              <div className="box-solicitante">
                <h3>Nome do Solicitante</h3>
              </div>

              <Link className="box-acoes">
                <span>Validar solicitação</span>
                <TbArrowsExchange />
              </Link>
            </li>

            <li className="listagem-solicitacoes-item">
              <div className="box-icone">
                <MdOutlineFormatListBulleted />
              </div>
              <div className="box-item">
                <h3>Nome do item</h3>
              </div>

              <div className="box-solicitante">
                <h3>Nome do Solicitante</h3>
              </div>

              <Link className="box-acoes">
                <span>Validar solicitação</span>
                <TbArrowsExchange />
              </Link>
            </li>

            <li className="listagem-solicitacoes-item">
              <div className="box-icone">
                <MdOutlineFormatListBulleted />
              </div>
              <div className="box-item">
                <h3>Nome do item</h3>
              </div>

              <div className="box-solicitante">
                <h3>Nome do Solicitante</h3>
              </div>

              <Link className="box-acoes">
                <span>Validar solicitação</span>
                <TbArrowsExchange />
              </Link>
            </li>
          </ul>
        </main>
      </section>
    </>
  );
}
