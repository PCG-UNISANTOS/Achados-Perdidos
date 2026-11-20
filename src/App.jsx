import "./styles/main.sass";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listagem from "./pages/Listagem";
import Registre from "./pages/Registre";
import ItemDetalhes from "./pages/ItemDetalhes";
import Construcao from "./pages/Construcao";
import Login from "./pages/Login";
import ReivindicarForm from "./pages/ReivindicarForm";
import Solicitacoes from "./pages/Solicitacoes";
import SolicitacoesDetalhes from "./pages/SolicitacoesDetalhes";

import AdminListagem from "./pages/admin/AdminListagem";
import AdminSolicitacoes from "./pages/admin/AdminSolicitacoes";
import CadastroItem from "./pages/admin/CadastroItem";
import Local from "./pages/admin/AdminLocal";
import Status from "./pages/admin/AdminStatus";
import Categoria from "./pages/admin/AdminCategoria";
import Usuarios from "./pages/admin/AdminUsuarios";

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
                <Solicitacoes />
              </PrivateRoutes>
            }
          />
          <Route
            path="/solicitacoes/detalhes/:id"
            element={
              <PrivateRoutes>
                <SolicitacoesDetalhes />
              </PrivateRoutes>
            }
          />
          <Route
            path="/item/:id"
            element={
              <PrivateRoutes>
                <ItemDetalhes />
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
          {/* ROTAS USUÁRIO ADMIN */}
          <Route
            path="/admin/listagem"
            element={
              <PrivateRoutes>
                <AdminListagem />
              </PrivateRoutes>
            }
          />
          <Route
            path="/admin/solicitacoes"
            element={
              <PrivateRoutes>
                <AdminSolicitacoes />
              </PrivateRoutes>
            }
          />
          <Route
            path="/admin/cadastro-item"
            element={
              <PrivateRoutes>
                <CadastroItem />
              </PrivateRoutes>
            }
          />
          <Route
            path="/admin/local"
            element={
              <PrivateRoutes>
                <Local />
              </PrivateRoutes>
            }
          />
          <Route
            path="/admin/status"
            element={
              <PrivateRoutes>
                <Status />
              </PrivateRoutes>
            }
          />
          <Route
            path="/admin/categoria"
            element={
              <PrivateRoutes>
                <Categoria />
              </PrivateRoutes>
            }
          />
          <Route
            path="/admin/usuarios"
            element={
              <PrivateRoutes>
                <Usuarios />
              </PrivateRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
