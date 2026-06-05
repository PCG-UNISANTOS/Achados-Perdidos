import axios from "axios";

const api = axios.create({
  baseURL: "https://api-achadoseperdidosvsa-clean-1.onrender.com/",
});

export default api;
