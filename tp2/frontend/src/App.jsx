import React, {useState} from "react";
import { Routes, Route, useNavigate} from "react-router-dom";

import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Gallery from "./components/gallery";
import Register from "./components/register";
import Login from "./components/login";
import Schedule from "./components/schedule";

import RestrictWorker from "./components/restricted/worker";
import RestrictPatient from "./components/restricted/patient";
import { WorkerList, PatientList, AgendaList } from "./components/restricted/data";

function App(props) {
	const navigate = useNavigate();
	// can be 'user' | 'patient' | 'worker', determined by login
	const [ role, setRole ] = useState("user")
	const [ userID, setUserID ] = useState("")

	const updateRole = (role) => {
		setRole(role)
		if (role !== "user") {
			navigate("/")
		}
	}

  return (
    <div>
      <Header role={role} />
			<div className="body">
				<Routes>
					<Route path="/" element={<Home role={role} />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/register-address" element={<Register userID={userID}/>} />
					<Route path="/login" element={<Login setRole={updateRole} setUserID={setUserID} />} />
					<Route path="/schedule-consult" element={<Schedule setRole={updateRole} setUserID={setUserID} />} />
					<Route path="/consult" element={<AgendaList userID={userID}/>} />

					<Route path="/restrict/register-worker" element={<RestrictWorker userID={userID} />} />
					<Route path="/restrict/register-patient" element={<RestrictPatient userID={userID} />} />
					<Route path="/restrict/list-worker" element={<WorkerList userID={userID} />} />
					<Route path="/restrict/list-patient" element={<PatientList userID={userID} />} />
				</Routes>
			</div>
      <Footer />
    </div>
  );
}

export default App;
