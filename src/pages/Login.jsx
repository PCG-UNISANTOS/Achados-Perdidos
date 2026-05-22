import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { IMaskInput } from "react-imask";
import Header from "../components/Header";
import Loading from "../components/Loading";
import { FaEye, FaEyeSlash, FaCar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FiBox, FiCheckCircle, FiShield, FiLogIn } from "react-icons/fi";
import { loginUser } from "../services/authService";

export default function Login() {
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
      const response = await loginUser(data);
      localStorage.setItem("token", response.token);
      localStorage.setItem("nomeUsuario", response.nome);
      navigate("/listagem");
    } catch (error) {
      console.error(error);

      alert("Email ou senha inválidos");
    } finally {
      setLoading(false);
    }
  }

  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <>
      {loading && <Loading />}
      <div className="login-section">
        <div className="login-section-content">
          <div className="box-conteudo">
            <div className="box-texto">
              <div className="box-texto__titulo">
                <div className="icone">
                  <FiLogIn />
                </div>
                <h1>Bem-vindo de volta</h1>
              </div>
              <p>Insira suas credenciais para acessar o sistema</p>
            </div>

            <form className="box-login" onSubmit={handleSubmit(onSubmit)}>
              <div className="item-input email">
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

              <div className="item-input senha">
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
                Entrar
              </button>

              <span className="register-link">
                Não tem uma conta? <Link to="/registre">Registre-se agora</Link>
              </span>
            </form>
          </div>
        </div>

        <div className="login-section-divisor">
          <ul className="listagem-descricao">
            <li className="listagem-descricao-item">
              <div className="titulo">
                <div className="box-icone">
                  <FiBox />
                </div>
                <h3>Cadastro fácil</h3>
              </div>
              <p>Cadastre itens perdidos de forma rápida e intuitiva</p>
            </li>

            <li className="listagem-descricao-item">
              <div className="titulo">
                <div className="box-icone">
                  <FiCheckCircle />
                </div>
                <h3>Reivindicação simples</h3>
              </div>
              <p>
                Processo simplificado para reivindicar objetos com verificação
                de identidade
              </p>
            </li>

            <li className="listagem-descricao-item">
              <div className="titulo">
                <div className="box-icone">
                  <FiShield />
                </div>
                <h3>Seguro e confiável</h3>
              </div>
              <p>
                Sistema seguro com validação de propriedade para proteger seus
                pertences
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
