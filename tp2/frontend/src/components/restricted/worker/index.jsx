import React from "react";
import "./index.css";

const BASE_URL = process.env.BACKEND_URL || "http://localhost:3001";

const Body = () => {
  return (
    <div className="register-body">

      <h1> Registrar: Funcionário </h1>
      <div className="register-form">
        <form action={`${BASE_URL}/worker`} method="POST" target="_blank">
          <label>
            Nome:
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Digite o nome..."
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Digite o email..."
            />
          </label>
          <label>
            Senha:
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Digite a senha..."
            />
          </label>
          <label>
            Telefone:
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Digite o telefone..."
            />
          </label>
          <label>
            CEP:
            <input
              type="text"
              id="zip_code"
              name="zip_code"
              placeholder="Digite o CEP..."
            />
          </label>
          <label>
            Contrato de Trabalho (Início):
            <input
              type="text"
              id="contract_date"
              name="contract_date"
              placeholder="Digite a data de início do contrato..."
            />
          </label>
          <label>
            Salário:
            <input
              type="text"
              id="salary"
              name="salary"
              placeholder="Digite o salário..."
            />
          </label>
          <input type="submit" value="Enviar" />
        </form>
      </div>

      <h1> Registrar: Médico </h1>
      <div className="register-form">
        <form action={`${BASE_URL}/worker`} method="POST" target="_blank">
          <label>
            Nome:
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Digite o nome..."
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Digite o email..."
            />
          </label>
          <label>
            Senha:
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Digite a senha..."
            />
          </label>
          <label>
            Telefone:
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Digite o telefone..."
            />
          </label>
          <label>
            CEP:
            <input
              type="text"
              id="zip_code"
              name="zip_code"
              placeholder="Digite o CEP..."
            />
          </label>
          <label>
            Contrato de Trabalho (Início):
            <input
              type="text"
              id="contract_date"
              name="contract_date"
              placeholder="Digite a data de início do contrato..."
            />
          </label>
          <label>
            Salário:
            <input
              type="text"
              id="salary"
              name="salary"
              placeholder="Digite o salário..."
            />
          </label>
          <label>
            Especialidade:
            <input
              type="text"
              id="specialty"
              name="specialty"
              placeholder="Digite a especialidade..."
            />
          </label>
          <label>
            CRM:
            <input
              type="text"
              id="crm"
              name="crm"
              placeholder="Digite o CRM..."
            />
          </label>
          <input type="submit" value="Enviar" />
        </form>
      </div>

    </div>
  );
};

export default Body;


/*
 * <label>
            Logradouro:
            <input
              type="text"
              id="worker-address"
              name="worker-address"
              placeholder="Digite o logradouro..."
            />
          </label>
          <label>
            Bairro:
            <input
              type="text"
              id="worker-district"
              name="worker-district"
              placeholder="Digite o bairro..."
            />
          </label>
          <label>
            Cidade:
            <input
              type="text"
              id="worker-city"
              name="worker-city"
              placeholder="Digite a cidade..."
            />
          </label>
          <label>
            Estado:
            <input
              type="text"
              id="worker-state"
              name="worker-state"
              placeholder="Digite o estado..."
            />
          </label>
          */
