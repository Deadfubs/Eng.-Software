import React from "react";
import "./index.css";

const BASE_URL = process.env.BACKEND_URL || "http://localhost:3001";

const Body = () => {
	return (
		<div className="register-body">
			<h1> Agendar Consulta </h1>
			<div className="register-form">
				<form action={`${BASE_URL}/agenda`} method="POST" target="_blank">
					<label>
						Data da consulta:
						<input
							type="text"
							id="date"
							name="date"
							placeholder="Digite a data da consulta..."
						/>
					</label>
					<label>
						Horário:
						<input
							type="text"
							id="time"
							name="time"
							placeholder="Digite o horário da consulta..."
						/>
					</label>
					<label>
						Email Medico:
						<input
							type="text"
							id="doctorEmail"
							name="doctorEmail"
							placeholder="Confirme o email do médico..."
						/>
					</label>
					<label>
						Email Paciente:
						<input
							type="text"
							id="patientEmail"
							name="patientEmail"
							placeholder="Confirme o email do paciente..."
						/>
					</label>
					<input type="submit" value="Enviar" />
				</form>
			</div>
		</div>
	);
};

export default Body;
