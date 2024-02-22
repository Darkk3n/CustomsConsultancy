import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CourseIndex } from './components/Courses/CourseIndex';
import { Home } from './components/Home';
import { InquiriesIndex, InquiryDetails } from './components/Inquiries';
import { NavBar } from './components/NavBar';
import { PotentialClientIndex } from './components/PotentialClients';

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/inquiries' element={<InquiriesIndex />} />
				<Route path='/courses' element={<CourseIndex />} />
				<Route path='/potentialclients' element={<PotentialClientIndex />} />
				<Route path='/inquiries/:inquiryid' element={<InquiryDetails />} />
			</Routes>
		</>
	)
}

export default App
