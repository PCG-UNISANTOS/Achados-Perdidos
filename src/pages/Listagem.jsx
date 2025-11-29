import Header from "../components/Header";
import ItemListagem from "../components/ItemListagem";
import { FaRegLightbulb } from "react-icons/fa";

export default function Listagem() {
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
            <ItemListagem />
            <ItemListagem />
            <ItemListagem />
            <ItemListagem />

            <ItemListagem />
            <ItemListagem />
            <ItemListagem />
            <ItemListagem />

            <ItemListagem />
            <ItemListagem />
            <ItemListagem />
            <ItemListagem />
          </ul>
        </div>
      </section>
    </>
  );
}
