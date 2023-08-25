import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
   return (
      <Navbar expand="lg" className="bg-body-tertiary">
         <Container>
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link href="/about">About Us</Nav.Link>
                  <Nav.Link href="/services">Services</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}