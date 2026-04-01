import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { IMaskInput } from "react-imask";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
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
      <section className="register-section">
        <div className="register-section-content">
          <div className="box-conteudo">
            <div className="box-texto">
              <div className="box-texto__titulo">
                <div className="icone">
                  <FiUserPlus />
                </div>
                <h1>Criar conta</h1>
              </div>
              <p>Preencha os dados abaixo para se registrar</p>
            </div>

            <form className="box-register" onSubmit={handleSubmit(onSubmit)}>
              <div className="item-input">
                <label>Nome completo</label>
                <input type="text" {...register("nome", { required: true })} />
              </div>
              <div className="item-input">
                <label>CPF</label>
                <Controller
                  name="cpf"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <IMaskInput
                      {...field}
                      mask="000.000.000-00"
                      unmask={false}
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
                  rules={{ required: true }}
                  render={({ field }) => (
                    <IMaskInput
                      {...field}
                      mask="(00) 00000-0000"
                      unmask={false}
                      placeholder="(00) 00000-0000"
                    />
                  )}
                />
              </div>
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
              <button type="submit" className="success-button">
                Registrar-se
              </button>

              <span className="login-link">
                Já tem uma conta? <Link to="/login">Faça login</Link>
              </span>
            </form>
          </div>
        </div>
        <div className="register-section-divisor"></div>
      </section>
    </>
  );
}

{
  /* <section className="register-section">
        <div className="register-section-container">
          <div className="register-section-container__header">
            <h1>Vamos criar sua conta</h1>
            <p>Os campos abaixo são essenciais para criarmos sua conta.</p>
          </div>

          <div className="register-section-container__content">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="item-input">
                <label>CPF</label>
                <Controller
                  name="cpf"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <IMaskInput
                      {...field}
                      mask="000.000.000-00"
                      unmask={false}
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
                  rules={{ required: true }}
                  render={({ field }) => (
                    <IMaskInput
                      {...field}
                      mask="(00) 00000-0000"
                      unmask={false}
                      placeholder="(00) 00000-0000"
                    />
                  )}
                />
              </div>

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

              <button type="submit" className="success-button">
                Cadastre-se
              </button>
            </form>
          </div>
        </div>
      </section> */
}
