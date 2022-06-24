import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Grid, Box, Button } from "@mui/material"
import "./index.css";

import logo from '../../images/virtual-med-logo.png';

// default role: 'user'
const defaultSwitch = [
			<Link to="/" className="header-link"> Home </Link>,
			<Link to="/gallery" className="header-link"> Galeria</Link>,
			<Link to="/login" className="header-link"> Login</Link>,
]

const renderSwitch = (role) => {
	switch (role) {
		case "patient":
			return [
				<Link to="/" className="header-link"> Home</Link>,
				<Link to="/gallery" className="header-link"> Galeria</Link>,
				<Link to="/register-address" className="header-link"> Registrar Endereço</Link>,
				<Link to="/schedule-consult" className="header-link"> Agendar Consulta</Link>,
				<Link to="/consult" className="header-link"> Minhas Consultas</Link>,
			]
		case "worker":
			return [
				<Link to="restrict/register-patient" className="header-link"> Registrar Paciente</Link>,
				<Link to="restrict/register-worker" className="header-link"> Registrar Funcionário</Link>,
				<Link to="/schedule-consult" className="header-link"> Agendar Consulta</Link>,
				<Link to="restrict/list-patient" className="header-link"> Listar Pacientes</Link>,
				<Link to="restrict/list-worker" className="header-link"> Listar Funcionários</Link>,
			]
		default:
			return defaultSwitch
	}
}
const Header = (props) => {
	const { role } = props;

	return (
		<header>
			<AppBar className="header">
				<Toolbar >
					<Grid
						container
						direction="row"
						justifyContent="space-around"
						alignItems="center"
						columnSpacing={1}
						rowSpacing={{ xs: 1, sm: 2, md: 3}}
					>
						<Grid item> <img src={logo} alt="logo" id="header-img" /> </Grid>
						<Grid item>
							<Typography variant="h6" component="h1" className="logo"> VIRTUAL MED</Typography>
						</Grid>
						<Grid item>
							<Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }} margin={1}>
								{renderSwitch(role).map((e) => {
									return (
										<Typography margin={2} style={{color:"#00adb5"}}> {e} </Typography>
									)
								})}
							</Box>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</header>
	)
};


export default Header;
