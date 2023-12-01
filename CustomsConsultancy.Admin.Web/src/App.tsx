import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { InquiriesIndex, InquiryDetails } from './components/Inquiries';
import { NavBar } from './components/NavBar';

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path='/' element={<div>Home</div>} />
				<Route path='/inquiries' element={<InquiriesIndex />} />
				<Route path='/courses' element={<div>Cursos</div>} />
				<Route path='/potentialclients' element={<div>Clientes Potenciales</div>} />
				<Route path='/inquiries/:inquiryid' element={<InquiryDetails />} />
			</Routes>
		</>
	)
}

export default App
