import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { IMaskInput } from "react-imask";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import Loading from "../components/Loading";

export default function Registre() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    try {
      setLoading(true);
      const response = await registerUser(data);
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      console.error(error);

      alert("Erro ao cadastrar usuário");
    } finally {
      setLoading(false);
    }
  }

  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <>
      {loading && <Loading />}
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
              <div className="item-input">
                <label>Senha</label>
                <div className="item-input__group">
                  <input
                    type={mostrarSenha ? "text" : "password"}
                    className={errors.senha ? "input-error" : ""}
                    {...register("senha", {
                      required: true,
                    })}
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
