import { adminMenu } from "../../config/menu";
import SideBar from "../../components/SideBar";

export default function AdminUsuarios() {
  return (
    <>
      {/* {loading && <Loading />} */}
      <section className="admin-container-section">
        <SideBar items={adminMenu} perfil="Administrador" />
        <main className="admin-container-section-conteudo">
          <header className="admin-container-section-conteudo__header">
            <h1>Perfil Administrador: Listagem de Usuários</h1>
          </header>
        </main>
      </section>
    </>
  );
}
