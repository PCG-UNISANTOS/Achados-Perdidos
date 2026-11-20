import React from "react";
import SideBar from "../components/SideBar";
import { IoConstruct } from "react-icons/io5";
import { userMenu, adminMenu } from "../config/menu";

const Construcao = () => {
  return (
    <>
      <section className="construcao-section">
        <SideBar items={userMenu} />
        <main>
          <h1>EM DESENVOLVIMENTO</h1>
          <IoConstruct />
        </main>
      </section>
    </>
  );
};

export default Construcao;
