import React from "react";
import { FiSearch } from "react-icons/fi";
import { RiArrowDownDoubleFill } from "react-icons/ri";
const Filter = () => {
  return (
    <>
      <div className="filtro">
        <div className="filtro-box">
          <div className="filtro-box__input">
            <FiSearch />
            <input
              type="text"
              placeholder="Buscar por nome ou descrição..."
              // value={search}
              // onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* <div className="filtro-box__select">
            <select>
              <option value="">Todos</option>
              <option value="pendente">Pendente</option>
              <option value="aprovado">Aprovado</option>
            </select>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Filter;
