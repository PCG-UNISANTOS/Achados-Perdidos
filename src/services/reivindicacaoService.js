import api from "../api/api";

export async function reivindicarItem(data, itemId, idUsuario) {
  console.log("Reivindicando item com os seguintes dados:", {
    descricao: data.descricao,
    itemId: itemId,
    idUsuario: idUsuario,
  });
  // const response = await api.post(`/reivindicacoes/itens/${itemId}/solicitar`, {
  //   usuarioId: usuarioId,
  //   descricaoDaProva: data.descricao,
  // });

  // return response.data;
}
