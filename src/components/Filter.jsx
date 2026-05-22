import { FiSearch } from "react-icons/fi";
import CustomSelect from "./CustomSelect";

const optionsCategoria = [
  { value: "", label: "Todas" },
  { value: "eletronicos", label: "Eletrônicos" },
  { value: "documentos", label: "Documentos" },
  { value: "roupas", label: "Roupas" },
  { value: "acessorios", label: "Acessórios" },
  { value: "chaves", label: "Chaves" },
  { value: "bolsas", label: "Bolsas" },
  { value: "outros", label: "Outros" },
];

const optionsStatus = [
  { value: "", label: "Todos" },
  { value: "DISPONIVEL", label: "Disponível" },
  { value: "EM_ANALISE", label: "Em análise" },
  { value: "REIVINDICADO", label: "Reivindicado" },
  { value: "INDISPONIVEL", label: "Indisponível" },
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
