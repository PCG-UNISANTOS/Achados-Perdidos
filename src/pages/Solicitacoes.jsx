import { useEffect, useState } from "react";
import ItemListagem from "../components/ItemListagem";
import { FaRegLightbulb } from "react-icons/fa";
const apiUrl = import.meta.env.VITE_API_URL;
import SideBar from "../components/SideBar";

export default function Solicitacoes() {
  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarItens() {
      try {
        const resposta = await fetch(`${apiUrl}/listar-itens`);
        const dados = await resposta.json();
        setItens(dados);
      } catch (erro) {
        console.error("Erro ao carregar itens:", erro);
      } finally {
        setLoading(false);
      }
    }

    carregarItens();
  }, []);

  return (
    <>
      <section className="listagem-section">
        <SideBar />
        <main className="listagem-conteudo"></main>
      </section>
    </>
  );
}
