import { Col, Container, Image, Row } from 'react-bootstrap'

export const ServicesIcons = () => (
   <Container style={{ height: '18rem', backgroundColor: 'orange' }}>
      <Row>
         <Col md={5}>
            <h1 style={{ color: 'black' }}>Servicios:</h1>
         </Col>
      </Row>
      <Row>
         <Col md={4}>
            <Image src="src/assets/img/InstructionIcon.png" />
         </Col>
         <Col md={4}>
            <Image src="src/assets/img/LegalDefenseIcon.png" />
         </Col>
         <Col md={4}></Col>
      </Row>
      <Row>
         <Col md={4}>
            <Image src="src/assets/img/ConsultancyIcon.png" />
         </Col>
         <Col md={4}>
            <Image src="src/assets/img/CustomsAgencyIcon.png" />
         </Col>
         <Col md={4}></Col>
      </Row>
   </Container>
)
