import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { InquiriesIndex } from './components/Inquiries/InquiriesIndex';
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
      </Routes>
    </>
  )
}

export default App