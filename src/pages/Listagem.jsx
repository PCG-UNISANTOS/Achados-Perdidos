import { useEffect, useState } from "react";
import ItemListagem from "../components/ItemListagem";
import { FaRegLightbulb } from "react-icons/fa";
const apiUrl = import.meta.env.VITE_API_URL;
import SideBar from "../components/SideBar";
import Filter from "../components/Filter";
import { itensMock } from "./../Arquitetura/JavaScript/mock";

export default function Listagem() {
  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itensFiltrados, setItensFiltrados] = useState(itensMock);

  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("");
  const [status, setStatus] = useState("");
  useEffect(() => {
    let resultado = itensMock;

    // busca nome
    if (busca) {
      resultado = resultado.filter((item) =>
        item.nome.toLowerCase().includes(busca.toLowerCase()),
      );
    }

    // categoria
    if (categoria?.value) {
      resultado = resultado.filter(
        (item) => item.categoria === categoria.value,
      );
    }

    // status
    if (status?.value) {
      resultado = resultado.filter((item) => item.status === status.value);
    }

    setItensFiltrados(resultado);
  }, [busca, categoria, status]);

  return (
    <>
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
            {itensFiltrados.map((item, index) => (
              <ItemListagem key={index} {...item} />
            ))}
          </ul>
        </main>
      </section>
    </>
  );
}
