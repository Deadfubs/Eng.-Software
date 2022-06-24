import React from "react";
import "./index.css";
import { Grid, Card, CardContent, CardMedia, Typography, Box, CardActionArea } from "@mui/material"

const data = [
  {
    title: "Entrada",
    url: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80swordshield/pokemon/145-g.png",
    description: "Entrada de fácil acesso.",
  },
  {
    title: "Equipe",
    url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    description:
      "Os melhores médicos especialistas.",
  },
  {
    title: "Recepção",
    url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80",
    description: "Recepção com atendimento rapido e seguro.",
  },
  {
    title: "Leitos",
    url: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    description: "Acomodações confortaveis.",
  },
  {
    title: "Leito particular",
    url: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80et/swordshield/pokemon/145-g.png",
    description: "Possuimos tambem leitos particulares, com acomodações para o acompanhantes.",
  },
  {
    title: "Corredores",
    url: "https://images.unsplash.com/photo-1517120026326-d87759a7b63b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description: "Corredores com amplo espaço para uma melhor transitação dos pacientes.",
  },
];

const ActionAreaCard = (props) => {
  const { title, url, description } = props;
  return (
    <Card sx={{height: "100%", width: "50vh",  margin: "auto", marginBottom: 3}}>
      <CardActionArea>
        <CardMedia component="img" height="360" image={url} alt={description} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const Gallery = (props) => {
  return (
    <Box>
      <Box borderBottom={1} sx={{mx:'auto', textAlign: 'center',}}>
				<Typography variant="h2" component="h3">Conheça a nossa Clínica</Typography>
		</Box>
      <Grid container spacing={5} paddingTop={10}>
        {data.map((obj) => {
          return (
						<Grid items xs={12} sm={6} lg={4} spacing={5}>
							<Box>
								<ActionAreaCard
									url={obj.url}
									title={obj.title}
									description={obj.description}
								/>
							</Box>
						</Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Gallery;
