import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<div>Home</div>} />
        <Route path='/inquiries' element={<div>Preguntas</div>} />
        <Route path='/courses' element={<div>Cursos</div>} />
      </Routes>
    </>
  )
}

export default App