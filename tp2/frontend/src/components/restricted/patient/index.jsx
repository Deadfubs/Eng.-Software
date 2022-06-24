import React from "react";
import "./index.css";

const BASE_URL = process.env.BACKEND_URL || "http://localhost:3001";

const Body = () => {
  return (
    <div className="register-body">
      <h1> Registrar Paciente </h1>
      <div className="register-form">
        <form action={`${BASE_URL}/patient`} method="POST" target="_blank">
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
            Peso:
            <input
              type="text"
              id="weight"
              name="weight"
              placeholder="Digite o peso..."
            />
          </label>
					<label>
            Altura:
            <input
              type="text"
              id="height"
              name="height"
              placeholder="Digite a altura..."
            />
          </label>
					<label>
            Tipo sanguíneo:
            <input
              type="text"
              id="blood_type"
              name="blood_type"
              placeholder="Digite o tipo sanguíneo..."
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Body;


/*
 * <label>
            CEP:
            <input
              type="text"
              id="zip_code"
              name="zip_code"
              placeholder="Digite o CEP..."
            />
          </label>
					<label>
            Logradouro:
            <input
              type="text"
              id="patient-address"
              name="patient-address"
              placeholder="Digite o logradouro..."
            />
          </label>
					<label>
            Bairro:
            <input
              type="text"
              id="patient-district"
              name="patient-district"
              placeholder="Digite o bairro..."
            />
          </label>
					<label>
            Cidade:
            <input
              type="text"
              id="patient-city"
              name="patient-city"
              placeholder="Digite a cidade..."
            />
          </label>
					<label>
            Estado:
            <input
              type="text"
              id="patient-state"
              name="patient-state"
              placeholder="Digite o estado..."
            />
          </label>
*/
