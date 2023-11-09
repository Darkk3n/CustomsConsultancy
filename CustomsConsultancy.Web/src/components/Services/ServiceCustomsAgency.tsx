import { Col, Container, Row } from "react-bootstrap"
import './ServiceCustomsAgency.css'
import './Services.css'

export const ServiceCustomsAgency = () => {
   return (
      <Container className="customs-agency-background">
         <Row>
            <Col md={6}></Col>
            <Col md={6}>
               <h1 style={{ color: 'white' }}>Despacho Aduanal:</h1>
               <p className="text-end all-text-font-size" style={{ color: "white" }}>
                  Proporcionamos asesoría jurídica y operativa en los trámites que se deben de realizar ante la Aduana de México en términos de la normatividad legal aplicable en materia aduanal.
               </p>
            </Col>
         </Row>
      </Container>
   )
}