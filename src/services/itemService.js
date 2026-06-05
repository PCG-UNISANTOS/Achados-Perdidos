import api from "../api/api";

export async function getItens() {
  const response = await api.get("/itens");

  return response.data;
}

export async function getItemById(id) {
  const response = await api.get(`/itens/${id}`);

  return response.data;
}

export async function deleteItem(id) {
  const response = await api.delete(`/itens/${id}`);

  return response.status;
}
