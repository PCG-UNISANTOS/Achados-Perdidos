import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineLocationMarker, HiOutlineCalendar } from "react-icons/hi";

export default function ItemListagem({
  id,
  nome,
  descricao,
  status,
  dataachado,
  categoria,
  local,
  imagem,
}) {
  const dataFormatada = new Date(dataachado).toLocaleDateString("pt-BR");

  const statusText = {
    DISPONIVEL: "Disponível",
    INDISPONIVEL: "Indisponível",
    DEVOLUCAO: "Em devolução",
    REIVINDICADO: "Reivindicado",
  };
  return (
    <>
      <li className="listagem-item">
        <div className="box-img">
          <img src={imagem?.urlimagem1} alt={nome} />
          <span className={`box-img__tag ${status}`}>{statusText[status]}</span>
        </div>

        <div className="box-infos">
          <h2>{nome}</h2>
          <p>{descricao}</p>

          <div className="box-infos__local">
            <HiOutlineLocationMarker />
            <span>{local?.nome}</span>
          </div>

          <div className="box-infos__data">
            <HiOutlineCalendar />
            <span>{dataFormatada}</span>
          </div>

          {status === "DISPONIVEL" ? (
            <Link
              to={`/item/${id}`}
              className={`box-infos__redirect ${status}`}
              title="Ver detalhes"
            >
              Ver detalhes
            </Link>
          ) : (
            <div className={`box-infos__redirect ${status}`}>
              {statusText[status]}
            </div>
          )}
        </div>
      </li>
    </>
  );
}
