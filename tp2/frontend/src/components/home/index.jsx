import React from "react";
import "./index.css";
import { Box, Typography, Paper, CssBaseline } from "@mui/material"

import main_banner from '../../images/home-img.png';

export default function Types() {
  return (
    <Box spacing={5} className="body-style">
      <Box> <CssBaseline />
				<Paper elevation={4}><img src={main_banner} alt="homepage-welcome"/></Paper>
      </Box>
      <Box marginTop={5} borderBottom={1}>
        <Typography variant="h2" component="div" gutterBottom>Bem vindos à clínica virtual</Typography>
			</Box>
			<Box marginTop={3}>
        <Typography variant="h8" align="justify" component="p" gutterBottom>
          Na Virtual MedClinic você poderá agendar consultas médicas com nossos especialistas de forma totalmente digital. Nossa clínica se coloca a disposção dos clientes, 24 horas por dia, com clínicos médicos altamente capacitados. Além disso, nossa rede disponibiliza toda a estrutura necessária para que seu atendimento e diagnóstico sejam os mais rápido possíveis. Cadastre-se agora e venha ser Virtual MedClinic!
        </Typography>
      </Box>
      <Box marginTop={5} borderBottom={1}>
        <Typography variant="h2" component="div" gutterBottom>Nossa missão e valores</Typography>
			</Box>
			<Box marginTop={3}>
        <Typography variant="h8" component="div" gutterBottom>
          Nossa principal missão é "cuidar de vidas", ofecendo um serviço médico acessível e de qualidade para que nossos pacientes se sintam seguros. E temos como principais valores:
        </Typography>
				<Box marginLeft={6}>
          <ul>
            <li><Typography variant="string">Compromisso com a sociedade.</Typography></li>
            <li><Typography variant="string">Cuidados com o ser humano.</Typography></li>
            <li><Typography variant="string">Qualidade assistencial e de segurança.</Typography></li>
            <li><Typography variant="string">Ética, respeito e transparência.</Typography></li>
          </ul>
				</Box>
      </Box>
    </Box>
  );
};
