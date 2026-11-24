import { adminMenu } from "../../config/menu";
import SideBar from "../../components/SideBar";

import { LuCirclePlus } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function AdminLocal() {
  return (
    <>
      {/* {loading && <Loading />} */}
      <section className="admin-container-section">
        <SideBar items={adminMenu} perfil="Administrador" />
        <main className="admin-container-section-conteudo">
          <header className="admin-container-section-conteudo__header">
            <h1>Perfil Administrador: Listagem de Local</h1>
          </header>

          <div className="local-content">
            <div className="local-content-titulo">
              <div className="local-content-titulo-opcoes">
                <span>Nome do Local</span>
                <span>Situação</span>
                <span>Ações</span>
              </div>
              <div className="box-redirect">
                <Link
                  className="botao-novo"
                  onClick={() => alert("Deseja realmente criar novo local?")}
                >
                  <span>Novo Local</span>
                  <LuCirclePlus />
                </Link>
              </div>
            </div>
            <ul className="local-content-listagem">
              <li className="local-content-listagem-item">
                <div className="box-texto">
                  <h3>Local do item perdido</h3>
                </div>

                <div className="box-status inativo">
                  <span>Inativo</span>
                </div>

                <div className="box-acoes">
                  <Link
                    onClick={() => alert("Deseja alterar este local?")}
                    className="botao-editar"
                  >
                    <FaRegEdit />
                  </Link>
                </div>
              </li>

              <li className="local-content-listagem-item">
                <div className="box-texto">
                  <h3>Local do item perdido</h3>
                </div>

                <div className="box-status ativo">
                  <span>Ativo</span>
                </div>

                <div className="box-acoes">
                  <Link
                    onClick={() => alert("Deseja alterar este local?")}
                    className="botao-editar"
                  >
                    <FaRegEdit />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </main>
      </section>
    </>
  );
}
