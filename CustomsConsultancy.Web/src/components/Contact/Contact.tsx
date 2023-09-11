import { Col, Container, Row } from 'react-bootstrap'
import { ContactForm, ContactInfo } from '.'
import './Contact.css'

export const Contact = () => {
   return (
      <Container fluid className='background-contact'>
         <Row>
            <Col md={3}>
               <ContactInfo />
            </Col>
            <Col md={9}>
               <ContactForm />
            </Col>
            <Col md></Col>
         </Row>
      </Container>
   )
}
