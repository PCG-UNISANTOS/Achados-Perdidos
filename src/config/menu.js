import {
  FiSearch,
  FiSend,
  FiPlusSquare,
  FiUsers,
  FiMapPin,
  FiInfo,
  FiTag,
} from "react-icons/fi";

export const userMenu = [
  {
    label: "Encontrar itens",
    title: "Encontrar itens",
    path: "/listagem",
    icon: FiSearch,
  },
  {
    label: "Solicitações",
    title: "Minhas solicitações",
    path: "/solicitacoes",
    icon: FiSend,
  },
];

export const adminMenu = [
  {
    label: "Encontrar itens",
    title: "Encontrar itens",
    path: "/admin/listagem",
    icon: FiSearch,
  },
  {
    label: "Solicitações",
    title: "Solicitações",
    path: "/admin/solicitacoes",
    icon: FiSend,
  },
  {
    label: "Cadastro de item",
    title: "Cadastro de item",
    path: "/admin/cadastro-item",
    icon: FiPlusSquare,
  },
  {
    label: "Local",
    title: "Local",
    path: "/admin/local",
    icon: FiMapPin,
  },
  {
    label: "Status",
    title: "Status",
    path: "/admin/status",
    icon: FiInfo,
  },
  {
    label: "Categoria",
    title: "Categoria",
    path: "/admin/categoria",
    icon: FiTag,
  },
  {
    label: "Usuários",
    title: "Gerenciar usuários",
    path: "/admin/usuarios",
    icon: FiUsers,
  },
];
