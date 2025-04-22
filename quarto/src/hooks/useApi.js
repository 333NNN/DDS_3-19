import { useState, useEffect } from "react";

const url = import.meta.env.VITE_API_URL;

export function getFuncionarios() {
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setFuncionarios(data);
        console.log("Dados recebidos: ", data);
      } catch (error) {
        console.log("Erro ao buscar os dados:", error);
      }
    }
    fetchData();
  }, []);

  return funcionarios;
}

export function addFuncionario(funcionario) {
  async function fetchData() {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(funcionario),
      });
      const data = await response.json();
      console.log("Usuário adicionado: ", data);
    } catch (error) {
      console.log("Erro ao cadastrar funcionário:", error);
    }
  }
  fetchData();
}

export function deletarFuncionario(id) {
  async function fetchData() {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      const data = await response.json;
      console.log("Usuário excluído com sucesso", data);
    } catch (error) {
      console.log("Erro ao deletar funcionário:", error);
    }
  }
  fetchData();
}
