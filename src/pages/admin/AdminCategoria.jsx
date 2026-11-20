import { adminMenu } from "../../config/menu";
import SideBar from "../../components/SideBar";

export default function AdminCategoria() {
  return (
    <>
      {/* {loading && <Loading />} */}
      <section className="admin-container-section">
        <SideBar items={adminMenu} perfil="Administrador" />
        <main className="admin-container-section-conteudo">
          <header className="admin-container-section-conteudo__header">
            <h1>Perfil Administrador: Listagem de Categorias</h1>
          </header>
        </main>
      </section>
    </>
  );
}
