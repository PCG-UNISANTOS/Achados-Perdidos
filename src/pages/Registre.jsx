import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { IMaskInput } from "react-imask";
import Header from "../components/Header";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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
      <section className="register-section">
        <div className="register-section-container">
          <div className="register-section-container__header">
            <h1>Vamos criar sua conta</h1>
            <p>Os campos abaixo são essenciais para criarmos sua conta.</p>
          </div>

          <div className="register-section-container__content">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* CPF */}
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

              {/* Telefone */}
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

              <button type="submit" className="success-button">
                Cadastre-se
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
