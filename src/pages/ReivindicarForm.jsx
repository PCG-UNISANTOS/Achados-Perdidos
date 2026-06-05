import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { IMaskInput } from "react-imask";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

import SideBar from "../components/SideBar";

export default function ReivindicarForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("Dados enviados:", data);
  }

  return (
    <>
      <section className="reivindicar-form-section">
        <SideBar />
        <main className="reivindicar-form-conteudo">
          <div className="reivindicar-form-conteudo-box">
            <div className="titulo-descricao">
              <h1>Formulário de Reivindicação</h1>
              <p>
                Esse formulário deve ser preenchido corretamente e com
                informações que comprovem a posse do item perdido. Após o envio,
                nossa equipe irá analisar as informações fornecidas e entrar em
                contato para confirmar a reivindicação. Lembre-se de que é
                importante fornecer detalhes precisos e verdadeiros para
                facilitar o processo de recuperação do item perdido.
              </p>
            </div>
            <form className="box-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="item-input">
                <label>Nome completo</label>
                <input
                  type="text"
                  className={errors.nome ? "input-error" : ""}
                  {...register("nome", { required: true })}
                />
              </div>
              <div className="item-input">
                <label>CPF</label>
                <Controller
                  name="cpf"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <IMaskInput
                      className={errors.cpf ? "input-error" : ""}
                      mask="000.000.000-00"
                      value={field.value}
                      onAccept={(value) => field.onChange(value)}
                      placeholder="000.000.000-00"
                    />
                  )}
                />
              </div>
              <div className="item-input">
                <label>Telefone</label>
                <Controller
                  name="telefone"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <IMaskInput
                      className={errors.telefone ? "input-error" : ""}
                      mask="(00) 00000-0000"
                      value={field.value}
                      onAccept={(value) => field.onChange(value)}
                      placeholder="(00) 00000-0000"
                    />
                  )}
                />
              </div>
              <div className="item-input">
                <label>Email</label>
                <input
                  type="email"
                  className={errors.email ? "input-error" : ""}
                  {...register("email", {
                    required: true,
                    pattern: /\S+@\S+\.\S+/,
                  })}
                />
              </div>
            </form>
          </div>
        </main>
      </section>
    </>
  );
}

{
  /* <section className="login-section">
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
      </section> */
}
