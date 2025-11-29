import React from "react";
import itemImg from "../Arquitetura/Imagens/item1.jpeg";
import { FaCalendarAlt } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineCalendar } from "react-icons/hi";

export default function ItemListagem({
  imagem,
  titulo,
  descricao,
  local,
  data,
  status,
}) {
  const statusText = {
    disponivel: "Disponível",
    indisponivel: "Indisponível",
    emDevolucao: "Em devolução",
    reivindicado: "Reivindicado",
  };
  return (
    <>
      <li className="listagem-item">
        <div className="box-img">
          <img src={imagem} alt={titulo} />
          <span className={`box-img__tag ${status}`}>{statusText[status]}</span>
        </div>

        <div className="box-infos">
          <h2>{titulo}</h2>
          <p>{descricao}</p>

          <div className="box-infos__local">
            <HiOutlineLocationMarker />
            <span>{local}</span>
          </div>

          <div className="box-infos__data">
            <HiOutlineCalendar />
            <span>{data}</span>
          </div>

          {status === "disponivel" ? (
            <a
              href="/"
              className={`box-infos__redirect ${status}`}
              title="Ver detalhes"
            >
              Ver detalhes
            </a>
          ) : (
            <a
              href="/"
              className={`box-infos__redirect ${status}`}
              title="Ver detalhes"
            >
              {statusText[status]}
            </a>
          )}
        </div>
      </li>
    </>
  );
}
