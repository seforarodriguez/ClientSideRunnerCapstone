
import { Route, Routes } from 'react-router-dom';
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import { ApplicationViews } from './components/views/ApplicationViews';
import NavBar from './nav/navBar';
import './RunnerApp.css';

function RunnerApp() {
  return (<Routes>
		<Route path="/" element={<Login />} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
				<>
					<NavBar />
					<ApplicationViews />
				</>
		} />
	</Routes>
    
  );
}

export default RunnerApp;
