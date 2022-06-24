import React from "react";
import "./index.css";

const BASE_URL = process.env.BACKEND_URL || "http://localhost:3001";

const Body = () => {
	return (
		<div className="register-body">
			<h1> Registrar Endereço </h1>
			<div className="register-form">
				<form action={`${BASE_URL}/address-bank`} method="POST" target="_blank">
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
						Logradouro:
						<input
							type="text"
							id="address"
							name="address"
							placeholder="Digite o logradouro..."
						/>
					</label>
					<label>
						Bairro:
						<input
							type="text"
							id="district"
							name="district"
							placeholder="Digite o bairro..."
						/>
					</label>
					<label>
						Cidade:
						<input
							type="text"
							id="city"
							name="city"
							placeholder="Digite a cidade..."
						/>
					</label>
					<label>
						Estado:
						<input
							type="text"
							id="state"
							name="state"
							placeholder="Digite o estado..."
						/>
					</label>
					<label>
						Email:
						<input
							type="text"
							id="personEmail"
							name="personEmail"
							placeholder="Confirme o seu email..."
						/>
					</label>
					<input type="submit" value="Enviar" />
				</form>
			</div>
		</div>
	);
};

export default Body;
