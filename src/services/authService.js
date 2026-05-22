import api from "../api/api";

export async function loginUser(data) {
  const response = await api.post("/usuario/login", {
    email: data.email,
    senha: data.senha,
  });

  return response.data;
}

export async function registerUser(data) {
  const response = await api.post("/usuario", {
    nome: data.nome,
    email: data.email,
    senha: data.senha,
    // remove mascara
    cpf: data.cpf.replace(/\D/g, ""),
    telefone: data.telefone.replace(/\D/g, ""),
    acessoId: 1,
  });

  return response.data;
}
