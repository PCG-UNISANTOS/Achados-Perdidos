import { FiSearch } from "react-icons/fi";
import CustomSelect from "./CustomSelect";

const optionsCategoria = [
  { value: "", label: "Todas" },
  {
    value: "Eletrônicos (Celular, Notebook, Carregador)",
    label: "Eletrônicos",
  },
  { value: "Documentos (RG, CNH, Carteirinha)", label: "Documentos" },
  { value: "Vestuário (Casaco, Boné, Mochila)", label: "Vestuário" },
  { value: "Chaves e Chaveiros", label: "Chaves" },
  { value: "Outros", label: "Outros" },
];

const optionsStatus = [
  { value: "", label: "Todos" },
  { value: "DISPONIVEL", label: "Disponível" },
  { value: "DEVOLUÇÃO", label: "Em devolução" },
  { value: "EM ANÁLISE", label: "Em análise" },
  { value: "REIVINDICADO", label: "Reivindicado" },
  { value: "INDISPONÍVEL", label: "Indisponível" },
];

export default function Filter({
  busca,
  setBusca,
  categoria,
  setCategoria,
  status,
  setStatus,
}) {
  return (
    <div className="filtro">
      <div className="filtro-box">
        <div className="filtro-box__input">
          <FiSearch />

          <input
            placeholder="Buscar por nome ou descrição..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
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
}
