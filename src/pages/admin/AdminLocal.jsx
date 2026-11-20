import { adminMenu } from "../../config/menu";
import SideBar from "../../components/SideBar";

export default function AdminLocal() {
  return (
    <>
      {/* {loading && <Loading />} */}
      <section className="admin-container-section">
        <SideBar items={adminMenu} perfil="Administrador" />
        <main className="admin-container-section-conteudo">
          <header className="admin-container-section-conteudo__header">
            <h1>Perfil Administrador: Listagem de Local</h1>
          </header>
        </main>
      </section>
    </>
  );
}
