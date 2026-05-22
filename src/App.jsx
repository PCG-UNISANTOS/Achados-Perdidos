import "./styles/main.sass";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listagem from "./pages/Listagem";
import Registre from "./pages/Registre";
import ItemDetalhes from "./pages/ItemDetalhes";
import Construcao from "./pages/Construcao";
import Login from "./pages/Login";
import ReivindicarForm from "./pages/ReivindicarForm";
import Solicitacoes from "./pages/Solicitacoes";

import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoutes>
                <Login />
              </PublicRoutes>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoutes>
                <Login />
              </PublicRoutes>
            }
          />
          <Route
            path="/registre"
            element={
              <PublicRoutes>
                <Registre />
              </PublicRoutes>
            }
          />
          <Route
            path="/listagem"
            element={
              <PrivateRoutes>
                <Listagem />
              </PrivateRoutes>
            }
          />
          <Route
            path="/solicitacoes"
            element={
              <PrivateRoutes>
                <Construcao />
              </PrivateRoutes>
            }
          />
          <Route
            path="/item/:id"
            element={
              <PrivateRoutes>
                <Construcao />
              </PrivateRoutes>
            }
          />
          <Route
            path="/item/:id/reivindicar"
            element={
              <PrivateRoutes>
                <ReivindicarForm />
              </PrivateRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
