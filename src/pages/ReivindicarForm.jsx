import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { IMaskInput } from "react-imask";
import Header from "../components/Header";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ReivindicarForm() {
  const{
    register,
    control,
    handleSubmit,
    formState: {errors},

  } = useForm();

  function onSubmit(data){
    console.log("Dados enviados:", data);
  }

  return (
    <>
      <Header />
      <section className="reivindicar-section">
        <div className="reivindicar-section-container">
          <div className="reivindicar-section-container__header">
            <h1>Preencha o formulário</h1>
            <p>Confirme que o item é seu e reivindique-o</p>
          </div>

          <div className="reivindicar-section-container__content">
            <form className="form-grid" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-grid-item">
                <label>Nome completo</label>
                <input type="text" {...register("nome", {required: true})}/>
              </div>

              <div className="form-grid-item">
                <label>Email</label>
                <input type="email" {...register("email", {required: true})}/>
              </div>
            </form>
          </div>
        </div>
      </section>
     
    </>
  );
}


 {/* <section className="login-section">
        <div className="login-section-container">
          <div className="login-section-container__header">
            <h1>Acesse sua conta</h1>
            <p>Entre e localize seus itens perdidos</p>
          </div>

          <div className="login-section-container__content">
            <form onSubmit={handleSubmit(onSubmit)}>
             
              <div className="item-input">
                <label>Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                />
              </div>

              
              <div className="item-input">
                <label>Senha</label>
                <div className="item-input__group">
                  <input
                    type={mostrarSenha ? "text" : "password"}
                    {...register("senha", { required: true })}
                  />
                  <span
                    className="icon"
                    onClick={() => setMostrarSenha(!mostrarSenha)}
                  >
                    {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
              <div className="box-buttons">
                <Link to="/registre" className="btn-criar-conta">
                  Crie sua conta
                </Link>
                <button type="submit" className="success-button">
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section> */}