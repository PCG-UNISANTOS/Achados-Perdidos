import { useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import Filter from "../../components/Filter";
import { getItens } from "../../services/itemService";
import Loading from "../../components/Loading";
import { adminMenu } from "../../config/menu";
import imgTeste from "../../Arquitetura/Imagens/item1.jpeg";

import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdminListagem() {
  const [itens, setItens] = useState([]);
  const [itensFiltrados, setItensFiltrados] = useState([]);

  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("");
  const [status, setStatus] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    carregarItens();
  }, []);

  async function carregarItens() {
    try {
      setLoading(true);
      const data = await getItens();
      setItens(data);
      setItensFiltrados(data);
    } catch (error) {
      console.error("Erro ao buscar itens:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    let resultado = [...itens];

    // Busca por nome
    if (busca) {
      resultado = resultado.filter((item) =>
        item.nome.toLowerCase().includes(busca.toLowerCase()),
      );
    }

    // Categoria
    if (categoria?.value) {
      resultado = resultado.filter(
        (item) => item.categoriaNome === categoria.value,
      );
    }

    // Status
    if (status?.value) {
      resultado = resultado.filter((item) => item.statusNome === status.value);
    }

    setItensFiltrados(resultado);
  }, [itens, busca, categoria, status]);

  return (
    <>
      {/* {loading && <Loading />} */}
      <section className="admin-listagem-section">
        <SideBar items={adminMenu} perfil="Administrador" />
        <main className="admin-listagem-conteudo">
          <header className="admin-listagem-conteudo__header">
            <h1>Perfil Administrador: Listagem de Itens Cadastrados</h1>
          </header>

          <Filter
            busca={busca}
            setBusca={setBusca}
            categoria={categoria}
            setCategoria={setCategoria}
            status={status}
            setStatus={setStatus}
          />

          <div className="admin-listagem-conteudo__content">
            <div className="box-opcoes">
              <span>Item</span>
              <span>Categoria</span>
              <span>Local</span>
              <span>Status</span>
              <span>Ações</span>
            </div>

            <ul className="list">
              <li className="list-item">
                <div className="box-item">
                  <div className="box-item-img">
                    <img src={imgTeste} alt="" />
                  </div>
                  <h3>Nome do item</h3>
                </div>

                <div className="box-categoria">
                  <span>Categoria</span>
                </div>

                <div className="box-local">
                  <span>Local</span>
                </div>

                <div className="box-status">
                  <span>Disponível</span>
                </div>

                <div className="box-acoes">
                  <Link
                    onClick={() => alert("Deseja alterar este item?")}
                    className="botao-editar"
                  >
                    <FaRegEdit />
                  </Link>
                  <Link
                    onClick={() => alert("Deseja realmente excluir este item?")}
                    className="botao-excluir"
                  >
                    <FaRegTrashCan />
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

{
  /* 
      <section className="listagem-section">
        <SideBar />

        <main className="listagem-conteudo">
          <header className="listagem-conteudo__header">
            <h1>Encontrar Itens</h1>
          </header>

          <Filter
            busca={busca}
            setBusca={setBusca}
            categoria={categoria}
            setCategoria={setCategoria}
            status={status}
            setStatus={setStatus}
          />

          <ul className="listagem-container">
            {itensFiltrados.map((item) => (
              <ItemListagem key={item.id} {...item} />
            ))}
          </ul>
        </main>
      </section> */
}
