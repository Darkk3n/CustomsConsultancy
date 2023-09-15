import { Col, Container, Row } from "react-bootstrap"

export const ServiceCustomsAgency = () => {
   return (
      <Container>
         <Row>
            <Col md={6}></Col>
            <Col md={6}>
               <h1>Despacho Aduanal:</h1>
               <p className="text-end">
                  Proporcionamos asesoría jurídica y operativa en los trámites que se deben de realizar ante la Aduana de México en términos de la normatividad legal aplicable en materia aduanal.
               </p>
            </Col>
         </Row>
      </Container>
   )
}