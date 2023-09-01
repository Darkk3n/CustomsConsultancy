import { Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Title.css';

export const Title = () => {
   return (
      <>
         <Navbar expand="lg" className="bg-body-tertiary" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
            <Navbar.Brand href='/'>
               <Image src='src/assets/img/Logo.jpeg' alt='Logo' style={{ borderRadius: '50%', width: '10rem', paddingRight: '10px' }} />
            </Navbar.Brand>
            <Nav style={{ display: 'flex' }}>
               <Nav.Item>
                  <Nav.Link href="/about" className='menu-link'>NOSOTROS</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link href="/services" className='menu-link'>SERVICIOS</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link href="/sessions" className='menu-link'>SESIONES</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link href="/contact" className='menu-link'>CONTACTO</Nav.Link>
               </Nav.Item>
            </Nav>
         </Navbar>
      </>
   )
}