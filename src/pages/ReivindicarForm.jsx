import { useForm, Controller } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { IMaskInput } from "react-imask";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { reivindicarItem } from "../services/reivindicacaoService";
import Loading from "../components/Loading";

import SideBar from "../components/SideBar";
import { userMenu, adminMenu } from "../config/menu";

export default function ReivindicarForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  async function onSubmit(dataForm) {
    try {
      setLoading(true);
      const idUsuario = localStorage.getItem("idUsuario");
      const data = await reivindicarItem(dataForm, id, idUsuario);
    } catch (error) {
      console.error("Erro ao enviar formulário de reivindicação:", error);
    } finally {
      setLoading(false);
      navigate("/solicitacoes");
    }
  }

  return (
    <>
      {loading && <Loading />}
      <section className="reivindicar-form-section">
        <SideBar items={userMenu} />
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
                <label>Descrição de prova do item</label>

                <textarea
                  rows={5}
                  placeholder="Descreva que este item é seu, especificando alguma particularidade ou informação"
                  className={errors.descricao ? "input-error" : ""}
                  {...register("descricao", {
                    required: "A descrição é obrigatória",
                  })}
                />
              </div>

              <button
                type="submit"
                className="success-button"
                title="Enviar Reivindicação"
              >
                Enviar Reivindicação
              </button>
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
