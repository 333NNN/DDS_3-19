import React from "react";
import styles from "./css/Forms.module.css";
import { useForm } from "react-hook-form";

const Forms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Dados: ", data);
  };

  const onError = (errors) => {
    console.log("Erros: ", errors);
  };

  console.log("Rendered");
  return (
    <div>
      <h4>Cadastrar</h4>
      <form
        className={styles.formulario}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            id="nome"
            placeholder="Digite seu nome"
            {...register("nome", {
              required: "Nome é obrigatório",
              minLength: {
                value: 3,
                message: "O nome deve ter pelo menor 3 caracteres",
              },
              maxLength: {
                value: 20,
                message: "O nome deve ter até 20 caracteres ",
              },
              pattern: {
                value: /^[A-Za-zçãÃÂâúÚíÍ ]+$/i,
                message: "O nome só pode conter letras",
              },
            })}
          />
          {errors.nome && <p className={styles.error}>{errors.nome.message}</p>}
        </label>

        <label>
          <span>Email: </span>
          <input
            type="email"
            id="email"
            placeholder="Digite seu email"
            {...register("email", {
              required: "O email é obrigatório",
              pattern: {
                value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,
                message: "Email inválido",
              },
              validate: (value) => value.includes("@") || "Email inválido",
            })}
          />
        </label>

        <label>
          <span>Senha:</span>
          <input
            type="password"
            {...register("senha", {
              required: "A senha é obrigatória",
              minLength: {
                value: 8,
                message: "A senha deve ter pelo menos 8 caracteres",
              },
              maxLength: {
                value: 20,
                message: "A senha deve ter menos de 20 caracteres",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial",
              },
            })}
            placeholder="Senha"
          />
          {errors.senha && (
            <p className={styles.error}>{errors.senha.message}</p>
          )}
        </label>
        <label>
          <span>Confirmar Senha:</span>
          <input
            type="password"
            {...register("confirmarSenha", {
              required: "A confirmação de senha é obrigatória",
              validate: (value) =>
                value === watch("senha") || "As senhas não coincidem",
            })}
            placeholder="Confirmar Senha"
          />
          {errors.confirmarSenha && (
            <p className={styles.error}>{errors.confirmarSenha.message}</p>
          )}
        </label>
        <label>
          <span>Descrição:</span>
          <textarea {...register("descricao")} placeholder="Descrição" />
        </label>
        <label>
          <span>Tipo:</span>
          <select {...register("tipo")} defaultValue="tipo1">
            <option value="tipo1">Tipo 1</option>
            <option value="tipo2">Tipo 2</option>
          </select>
        </label>
        <label>
          <span>Data:</span>
          <input type="date" {...register("data")} />
        </label>
        <label>
          <span>Hora:</span>
          <input type="time" {...register("hora")} />
        </label>
        <label>
          <span>Arquivo:</span>
          <input type="file" {...register("arquivo")} />
        </label>
        <label>
          <span>Concordo com os termos:</span>
          <input type="checkbox" {...register("checkbox")} />
        </label>

        <input
          type="submit"
          value="Enviar"
          style={{ backgroundColor: "#0271e0", color: "white" }}
        />
      </form>
    </div>
  );
};

export default Forms;
