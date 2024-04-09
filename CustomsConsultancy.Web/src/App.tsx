import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AboutUs, Contact, Course, CourseSubscription, Home, Services, Sessions, Title } from './components';

export const App = () => {
	return (
		<>
			<Title />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<AboutUs />} />
				<Route path='/services' element={<Services />} />
				<Route path='/sessions' element={<Sessions />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/courses/:courseId' element={<Course />} />
				<Route path='/courses/:courseId/subscribe' element={<CourseSubscription />} />
			</Routes>
		</>
	)
}
