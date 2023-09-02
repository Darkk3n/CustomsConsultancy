import { Col, Container, Row } from 'react-bootstrap'
import { ContactForm, ContactInfo } from '.'
import './Contact.css'

export const Contact = () => {
   return (
      <Container fluid className='background-contact'>
         <Row>
            <Col md>
               <ContactInfo />
            </Col>
            <Col md>
               REGISTRO PARA RECIBIR INFORMACIÓN DE NUESTRAS SESIONES DE ESTUDIO ADUANAL.
               <ContactForm />
            </Col>
            <Col md></Col>
         </Row>
      </Container>
   )
}
