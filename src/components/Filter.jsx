import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import CustomSelect from "./CustomSelect";

const optionsCategoria = [
  { value: "todas", label: "Todas" },
  { value: "eletronicos", label: "Eletrônicos" },
  { value: "documentos", label: "Documentos" },
  { value: "roupas", label: "Roupas" },
  { value: "acessorios", label: "Acessórios" },
  { value: "chaves", label: "Chaves" },
  { value: "bolsas", label: "Bolsas" },
  { value: "outros", label: "Outros" },
];

const optionsStatus = [
  { value: "todos", label: "Todos" },
  { value: "disponivel", label: "Disponível" },
  { value: "em-analise", label: "Em análise" },
  { value: "reivindicado", label: "Reivindicado" },
];

const Filter = () => {
  const [categoria, setCategoria] = useState(null);
  const [status, setStatus] = useState(null);

  return (
    <div className="filtro">
      <div className="filtro-box">
        <div className="filtro-box__input">
          <FiSearch />
          <input placeholder="Buscar por nome ou descrição..." />
        </div>

        <CustomSelect
          options={optionsCategoria}
          placeholder="Categoria"
          value={categoria}
          onChange={setCategoria}
        />

        <CustomSelect
          options={optionsStatus}
          placeholder="Status"
          value={status}
          onChange={setStatus}
        />
      </div>
    </div>
  );
};

export default Filter;
