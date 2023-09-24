import { Col, Container, Row } from "react-bootstrap"
import './ServiceInstruction.css'

export const ServiceInstruction = () => {
   return (
      <Container className="instruction-background">
         <Row>
            <Col md={6} className="mt-4">
               <h1>Instrucción:</h1>
               <p className="text-start">
                  Impartimos cursos de capacitación de los cuales podrás obtener valor agregado con nuevos conocimientos, información, actualización e instrucción en temas relativos a la materia aduanal.
               </p>
            </Col>
            <Col md={6}></Col>
         </Row>
      </Container>
   )
}
