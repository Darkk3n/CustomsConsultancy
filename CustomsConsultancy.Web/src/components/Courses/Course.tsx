import { Button, Col, Container, Row } from 'react-bootstrap';
import './Course.css';
export const Course = () => {
   // const { courseId } = useParams();

   return (
      <>
         <Container>
            <h2 style={{ textAlign: 'justify' }}>Titulo del Curso</h2>
            <h3 style={{ textAlign: 'justify' }}>Cursos Grabados</h3>
         </Container>
         <Container style={{ backgroundColor: 'lightGray' }}>
            <Row>
               <Col md={4}>
                  <div className='flex-display'>
                     <h3 className='regular-text'>Precio</h3>
                     <h1 className='emphazised-text'>$1,740</h1>
                     <p className='regular-text'>Precio por persona IVA incluido.</p>
                  </div>
               </Col>
               <Col md={4}>
                  <div className='flex-display'>
                     <h3 className='regular-text'>Datos del Curso</h3>
                     <p className='bolded'>Expositor: <span className='regular-text-lighter'>Andres Aguilar Sánchez</span></p>
                     <p className='bolded'>Duración: <span className='regular-text-lighter'>3 hrs 56 minutos</span></p>
                     <p className='bolded'>Incluye: <span className='regular-text-lighter'>Acceso al curso, material y diploma de participación.</span></p>
                  </div>
               </Col>
               <Col md={4}>
                  <div className='flex-display'>
                     <h4>Registro y Pago</h4>
                     <Button variant='primary'>Registrarme al curso</Button>
                  </div>
               </Col>
            </Row>
         </Container>
         <Container>
            <hr />
            <hr />
         </Container>
         <Container>
            <h3 style={{ textAlign: 'justify' }}>Objetivo</h3>
            <p style={{ textAlign: 'justify' }}>Texto del objetivo</p>
         </Container>
      </>
   )
}
