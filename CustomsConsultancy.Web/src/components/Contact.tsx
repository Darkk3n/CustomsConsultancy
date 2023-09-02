import { Col, Container, Image, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Contact.css'

export const Contact = () => {
   return (
      <Container fluid className='background-contact'>
         <Row>
            <Col md>
               <div className='contact-info'>
                  <p className='contact-info-header'>Contacto:</p>
                  <p className='data-header'>Telefono</p>
                  <p className='data-info'>2294639014</p>
               </div>
               <div className='contact-info'>
                  <p className='data-header'>Email</p>
                  <p className='data-info'>ic.aduanal@gmail.com</p>
               </div>
               <div className='contact-info'>
                  <div className='social'>
                     <p className='data-header'>Social</p>
                     <NavLink to='https://www.facebook.com/i.c.aduanal' target='_blank' style={{ paddingLeft: '10px' }}>
                        <Image src='src/assets/img/FBLogo.png' alt='FB Logo' className='social-logo' />
                     </NavLink>
                     <NavLink to='https://www.instagram.com/icaduanal/' target='_blank' style={{ paddingLeft: '10px' }}>
                        <Image src='src/assets/img/Instagram.png' className='social-logo' />
                     </NavLink>
                  </div>
               </div>
            </Col>
            <Col md style={{ color: 'white' }}>
               REGISTRO PARA RECIBIR INFORMACIÓN DE NUESTRAS SESIONES DE ESTUDIO ADUANAL.
            </Col>
            <Col md>Foo</Col>
         </Row>
      </Container>
   )
}
