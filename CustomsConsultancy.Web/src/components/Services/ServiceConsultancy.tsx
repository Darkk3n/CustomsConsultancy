import { Col, Container, Row } from "react-bootstrap"

export const ServiceConsultancy = () => {
   return (
      <Container>
         <Row>
            <Col md={6}></Col>
            <Col md={6}>
               <h1>Consultoría:</h1>
               <p className="text-start">
                  Proporcionamos asesoría jurídica relativa interpretación y aplicación de las Leyes y normatividad legal aplicable en la materia aduanal, que pueden ser de dos tipos:
               </p>
               <ul className="text-start">
                  <li>Orientación Jurídica Aduanal</li>
                  <li>Consultoría de Análisis Especial</li>
               </ul>
            </Col>
         </Row>
      </Container>
   )
}