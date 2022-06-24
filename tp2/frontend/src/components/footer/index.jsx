import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material"

export default function Footnote() {
	return (
		<footer>
			<Box
				px={{ xs: 3, sm: 8 }}
				py={{ xs: 3, sm: 8 }}
				bgcolor="text.secondary"
				color="white"
			>
				<Container maxWidth="lg">
					<Grid container spacing={10}>
						<Grid item xs={12} sm={6}>
							<Box borderBottom={1}>Email</Box>
							<Box><Typography> contato@virtualmed.com.br </Typography></Box>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Box borderBottom={1}>Telefone</Box>
							<Box><Typography> (31)1234-1234 </Typography></Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</footer>
	);
}
