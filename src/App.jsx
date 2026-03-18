import "./styles/main.sass";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Listagem from "./pages/Listagem";
import Registre from "./pages/Registre";
import ItemDetalhes from "./pages/ItemDetalhes";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listagem" element={<Listagem />} />
          <Route path="/registre" element={<Registre />} />
          <Route path="/login" element={<Login />} />
          <Route path="/item/:id" element={<ItemDetalhes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
