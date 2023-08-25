import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { AboutUs, Contact, Services, Sessions } from './components'


export const App = () => {
  return (
    <>
      <h1>I.C. Aduanal</h1>
      <Link to='/about'>Nosotros</Link>
      <Link to='/services'>Servicios</Link>
      <Link to='/sessions'>Sesiones</Link>
      <Link to='/contact'>Contacto</Link>
      <Routes>
        <Route path='/about' element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/sessions' element={<Sessions />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}