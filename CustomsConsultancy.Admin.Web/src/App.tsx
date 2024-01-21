import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { InquiriesIndex, InquiryDetails } from './components/Inquiries';
import { NavBar } from './components/NavBar';
import { PotentialClientList } from './components/PotentialClients';

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/inquiries' element={<InquiriesIndex />} />
				<Route path='/courses' element={<div>Cursos</div>} />
				<Route path='/potentialclients' element={<PotentialClientList />} />
				<Route path='/inquiries/:inquiryid' element={<InquiryDetails />} />
			</Routes>
		</>
	)
}

export default App
