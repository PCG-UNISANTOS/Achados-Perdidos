import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineLocationMarker, HiOutlineCalendar } from "react-icons/hi";

export default function ItemListagem({
  id,
  nome,
  categoriaNome,
  statusNome,
  fotoCapaUrl,
  descricao,
  localNome,
  dataAchado,
}) {
  const dataFormatada = new Date(dataAchado).toLocaleDateString("pt-BR");

  const statusText = {
    DISPONIVEL: "Disponível",
    INDISPONIVEL: "Indisponível",
    DEVOLUÇÃO: "Em devolução",
    REIVINDICADO: "Reivindicado",
  };
  return (
    <>
      <li className="listagem-item">
        <div className="box-img">
          <img src={fotoCapaUrl} alt={nome} />
          <span className={`box-img__tag ${statusNome}`}>
            {statusText[statusNome]}
          </span>
        </div>

        <div className="box-infos">
          <h2>{nome}</h2>
          <p>{descricao}</p>

          <div className="box-infos__local">
            <HiOutlineLocationMarker />
            <span>{localNome}</span>
          </div>

          <div className="box-infos__data">
            <HiOutlineCalendar />
            <span>{dataFormatada}</span>
          </div>

          {statusNome === "DISPONIVEL" ? (
            <Link
              to={`/item/${id}`}
              className={`box-infos__redirect ${statusNome}`}
              title="Ver detalhes"
            >
              Ver detalhes
            </Link>
          ) : (
            <div className={`box-infos__redirect ${statusNome}`}>
              {statusText[statusNome]}
            </div>
          )}
        </div>
      </li>
    </>
  );
}
