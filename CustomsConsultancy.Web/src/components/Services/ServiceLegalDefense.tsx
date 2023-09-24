import { Col, Container, Row } from "react-bootstrap"
import './ServiceLegalDefense.css'

export const ServiceLegalDefense = () => {
   return (
      <Container className="legal-defense-background">
         <Row>
            <Col md={6} style={{ color: 'white' }} className="mt-3">
               <h1>Defensa Juridica</h1>
               <p className="text-start">Se realiza el estudio de los actos de autoridad en particular y se define una estrategia legal que permita lograr el mejor beneficio de sus intereses.</p>
               <ul className="text-start">
                  <li>Procedimientos administrativos aduaneros</li>
                  <li>Recursos de revocacion</li>
                  <li>Juicios de nulidad</li>
                  <li>Juicios de amparo</li>
               </ul>
            </Col>
         </Row>
      </Container>
   )
}
