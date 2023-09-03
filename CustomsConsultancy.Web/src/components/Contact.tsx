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
               <ContactForm />
            </Col>
            <Col md></Col>
         </Row>
      </Container>
   )
}
