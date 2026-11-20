import { useEffect, useState } from "react";
import ItemListagem from "../../components/ItemListagem";
import SideBar from "../../components/SideBar";
import Filter from "../../components/Filter";
import { getItens } from "../../services/itemService";
import Loading from "../../components/Loading";
import { adminMenu } from "../../config/menu";

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
