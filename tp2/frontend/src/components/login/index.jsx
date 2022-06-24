import React, {useState} from 'react';
import {
  Grid,
  TextField,
  Paper,
  Button
} from '@mui/material';
import axios from 'axios';

const BACKEND_URL = (process.env.BACKEND_URL || "http://localhost:3001")
const LOGIN_URL = BACKEND_URL+"/login"

const LoginPage = (props) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
  const { setRole, setUserID } = props;

	const buttonClick = async () => {
		axios.post(LOGIN_URL, { email: email, password: password })
			.then( ({data}) => {
			console.log("data response: ", data);
			if ( data == null || data.role == null ) {
				setRole("user");
			} else {
				setRole(data.role);
				setUserID(data.id)
			}
		})
			.catch(err => {
				console.log(err);
				alert("user doesn't exist")
				setRole("user")
			})
	}

  return (
		<Paper className="login-paper" elevation={4}>
			<Grid
				container
				spacing={3}
				direction={'column'}
				justify={'center'}
				alignItems={'center'}
				className="login-grid"
			>
				<Grid item xs={12}>
					<TextField label="Email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
				</Grid>
				<Grid item xs={12}>
					<TextField label="Senha" type={'password'} value={password} onChange={(e) => { setPassword(e.target.value) }}/>
				</Grid>
				<Grid item xs={12}>
					<Button variant="contained" onClick={buttonClick}> Login </Button>
				</Grid>
			</Grid>
		</Paper>
  );
};

export default LoginPage;
