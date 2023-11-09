import { useEffect, useMemo, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { CourseData } from '../../Models/CourseData';
import './Course.css';
export const Course = () => {
   const mockData: CourseData[] = useMemo(() => {
      return [
         {
            id: 0,
            title: 'Curso 1',
            price: 1000,
            duration: '2 horas',
            objective: 'Texto del Objetivo del curso 1'
         },
         {
            id: 1,
            title: 'Curso 2',
            price: 2000,
            duration: '1 hora',
            objective: 'Texto del Objetivo del curso 2'
         },
         {
            id: 2,
            title: 'Curso 3',
            price: 3500,
            duration: '3 horas',
            objective: 'Texto del Objetivo del curso 3'
         },
         {
            id: 3,
            title: 'Curso 3',
            price: 1200,
            duration: '1 hora',
            objective: 'Texto del Objetivo del curso 3'
         },
      ]
   }, [])
   const [selectedCourse, setSelectedCourse] = useState<CourseData>()
   const { courseId } = useParams();
   useEffect(() => {
      const parsedCoursedId = Number(courseId)
      //Use fetch here instead when the API project exists
      setSelectedCourse(mockData[parsedCoursedId]);
   }, [courseId, mockData])

   return (
      <>
         <Container>
            <h2 style={{ textAlign: 'justify' }}>{selectedCourse?.title}</h2>
            <h3 style={{ textAlign: 'justify' }}>Cursos Grabados</h3>
         </Container>
         <Container style={{ backgroundColor: 'lightGray' }}>
            <Row>
               <Col md={4}>
                  <div className='flex-display'>
                     <h3 className='regular-text'>Precio</h3>
                     <h1 className='emphazised-text'>${selectedCourse?.price}</h1>
                     <p className='regular-text'>Precio por persona IVA incluido.</p>
                  </div>
               </Col>
               <Col md={4}>
                  <div className='flex-display'>
                     <h3 className='regular-text'>Datos del Curso</h3>
                     <p className='bolded'>Expositor: <span className='regular-text-lighter'>Andres Aguilar Sánchez</span></p>
                     <p className='bolded'>Duración: <span className='regular-text-lighter'>{selectedCourse?.duration}</span></p>
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
            <p style={{ textAlign: 'justify' }}>{selectedCourse?.objective}</p>
         </Container>
      </>
   )
}
