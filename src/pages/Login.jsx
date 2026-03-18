import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { IMaskInput } from "react-imask";
import Header from "../components/Header";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("Dados enviados:", data);
  }

  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <>
      <Header />
      <section className="login-section">
        <div className="login-section-container">
          <div className="login-section-container__header">
            <h1>Acesse sua conta</h1>
            <p>Entre e localize seus itens perdidos</p>
          </div>

          <div className="login-section-container__content">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email */}
              <div className="item-input">
                <label>Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                />
              </div>

              {/* Senha */}
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
      </section>
    </>
  );
}
