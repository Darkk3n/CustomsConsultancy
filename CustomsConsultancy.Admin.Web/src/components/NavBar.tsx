import { Navbar, Image, Nav } from 'react-bootstrap'
import './NavBar.css'

export const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                <Navbar.Brand href='/'>
                    <Image src='src/assets/img/Logo.jpeg' alt='Logo' style={{ borderRadius: '50%', width: '10rem', paddingRight: '10px' }} />
                </Navbar.Brand>
                <Nav style={{ display: 'flex' }}>
                    <Nav.Item>
                        <Nav.Link href="/inquiries" className='menu-link'>Preguntas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/courses" className='menu-link'>Cursos</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </>
    )
}
