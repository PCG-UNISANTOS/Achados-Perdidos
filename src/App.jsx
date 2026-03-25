import "./styles/main.sass";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Listagem from "./pages/Listagem";
import Registre from "./pages/Registre";
import ItemDetalhes from "./pages/ItemDetalhes";
import Login from "./pages/Login";
import ReivindicarForm from "./pages/ReivindicarForm";

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
          <Route path="/item/:id/reivindicar" element={<ReivindicarForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
