import React, {useState, useEffect} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const BACKEND_URL = (process.env.BACKEND_URL || "http://localhost:3001")
const PATIENT_LIST_URL = BACKEND_URL+"/patient/all"
const WORKER_LIST_URL = BACKEND_URL+"/worker/all"
const AGENDA_LIST_URL = BACKEND_URL+"/agenda"

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export function WorkerList(props) {
	const [rows, setRows] = useState([])
	useEffect(() => {
		const getRows = async() => {
			const response = await axios.get(WORKER_LIST_URL)
			setRows(response.data.data)
		}
		getRows()
	}, []);
	return (
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Funcionário</TableCell>
							<TableCell align="right">Nome</TableCell>
							<TableCell align="right">Email</TableCell>
							<TableCell align="right">Telefone</TableCell>
							<TableCell align="right">Contrato (Data Inicial)</TableCell>
							<TableCell align="right">Salário</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								key={row.name}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row">{row.ID}</TableCell>
								<TableCell align="right">{row.name}</TableCell>
								<TableCell align="right">{row.email}</TableCell>
								<TableCell align="right">{row.phone}</TableCell>
								<TableCell align="right">{row.contract_date}</TableCell>
								<TableCell align="right">{row.salary.toFixed(2)}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		);
}

export function PatientList(props) {
	const [rows, setRows] = useState([])
	useEffect(() => {
		const getRows = async() => {
			const response = await axios.get(PATIENT_LIST_URL)
			setRows(response.data.data)
		}
		getRows()
	}, []);
	return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
					<TableRow>
						<TableCell>Paciente</TableCell>
						<TableCell align="right">Nome</TableCell>
						<TableCell align="right">Email</TableCell>
						<TableCell align="right">Telefone</TableCell>
						<TableCell align="right">Peso</TableCell>
						<TableCell align="right">Altura</TableCell>
						<TableCell align="right">Tipo Sanguíneo</TableCell>
					</TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"> {row.ID} </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.weight.toFixed(2)}</TableCell>
              <TableCell align="right">{row.height.toFixed(2)}</TableCell>
              <TableCell align="right">{row.blood_type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export function AgendaList(props) {
	const { userID } = props
	const [rows, setRows] = useState([])
	useEffect(() => {
		const getRows = async() => {
			const response = await axios.get(AGENDA_LIST_URL+`/patient?patientID=${userID}`)
			const r = await response.data.data.map(async(agenda) => {
				const doctorResponse = await axios.get(BACKEND_URL+`/doctor?id=${agenda.doctor_ID}`)
				const doctorName = doctorResponse.data.data[0].name
				return {
					...agenda,
					doctorName: doctorName
				}
			})
			const bla = await Promise.all(r, (resp) => {
				return resp
			})
			setRows(bla)
		}
		getRows()
	}, []);
	return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
					<TableRow>
						<TableCell>Consultas</TableCell>
						<TableCell align="right">Médico</TableCell>
						<TableCell align="right">Data</TableCell>
						<TableCell align="right">Horário</TableCell>
					</TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"> {row.ID} </TableCell>
              <TableCell align="right">{row.doctorName}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

