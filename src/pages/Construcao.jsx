import React from "react";
import SideBar from "../components/SideBar";
import { IoConstruct } from "react-icons/io5";

const Construcao = () => {
  return (
    <>
      <section className="construcao-section">
        <SideBar />
        <main>
          <h1>EM DESENVOLVIMENTO</h1>
          <IoConstruct />
        </main>
      </section>
    </>
  );
};

export default Construcao;
