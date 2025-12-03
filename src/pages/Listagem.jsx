import { useEffect, useState } from "react";
import Header from "../components/Header";
import ItemListagem from "../components/ItemListagem";
import { FaRegLightbulb } from "react-icons/fa";

export default function Listagem() {
  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarItens() {
      try {
        const resposta = await fetch(
          "https://api-achados.onrender.com/api/listar-itens",
        );
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
      <Header />
      <section className="listagem-section">
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
      </section>
    </>
  );
}
