import { useForm, Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";
import Header from "../components/Header";

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
  return (
    <>
      <Header />
      <section className="login-section">
        <div className="login-section-container">
          <div className="login-section-container__header">
            <h1>LOGIN</h1>
          </div>

          <div className="login-section-container__content">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* CPF */}
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

              {/* Telefone */}
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

              {/* Email */}
              <label>Email</label>
              <input type="email" {...register("email", { required: true })} />

              {/* Senha */}
              <label>Senha</label>
              <input
                type="password"
                {...register("senha", { required: true })}
              />

              <button type="submit">Entrar</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
