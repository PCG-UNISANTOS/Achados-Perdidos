import { useEffect, useState } from "react";
import ItemListagem from "../components/ItemListagem";
import { FaRegLightbulb } from "react-icons/fa";
const apiUrl = import.meta.env.VITE_API_URL;
import SideBar from "../components/SideBar";

export default function Listagem() {
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

{
  /* <section className="listagem-section">
        <div className="listagem-section-container">
          <div className="listagem-section-container__header">
            <div className="titulo">
              <h1>Itens localizados</h1>
              <FaRegLightbulb />
            </div>
            <p>Navegue pelos itens encontrados e reivindique o seu!</p>
          </div>
          <ul className="listagem-section-container__content">
            {itens.map((item, index) => (
              <ItemListagem key={index} {...item} />
            ))}
          </ul>
        </div>
      </section> */
}
