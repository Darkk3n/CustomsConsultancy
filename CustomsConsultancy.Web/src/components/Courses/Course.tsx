import { useEffect, useMemo, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import { CourseData } from '../../models/CourseData';
import './Course.css';
export const Course = () => {
   const baseImg = '../src/assets/img/';
   const mockData: CourseData[] = useMemo(() => {
      return [
         {
            id: 0,
            title: 'Curso 1',
            price: 1000,
            duration: '2 horas',
            objective: 'Texto del Objetivo del curso 1',
            image: 'Course1.webp'
         },
         {
            id: 1,
            title: 'Curso 2',
            price: 2000,
            duration: '1 hora',
            objective: 'Texto del Objetivo del curso 2',
            image: 'Course2.webp'
         },
         {
            id: 2,
            title: 'Curso 3',
            price: 3500,
            duration: '3 horas',
            objective: 'Texto del Objetivo del curso 3',
            image: 'Course3.webp'
         },
         {
            id: 3,
            title: 'Curso 3',
            price: 1200,
            duration: '1 hora',
            objective: 'Texto del Objetivo del curso 3',
            image: 'Course4.webp'
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
            <h1 className='regular-text'>{selectedCourse?.title}</h1>
         </Container>
         <Container>
            <Image src={`${baseImg}${selectedCourse?.image}`} />
         </Container>
         <Container>
            <NavLink to='https://www.tiktok.com/@i.c.aduanal/video/7296225010857839878?_r=1&_t=8gyntQgfdXK' target='_blank' className='video-text'>
               Video Explicativo
            </NavLink>
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
                     <h4 className='regular-text'>Registro y Pago</h4>
                     <Button variant='primary'>Registrarme al curso</Button>
                  </div>
               </Col>
            </Row>
         </Container>
         <Container>
            <hr />
            <hr />
         </Container>
      </>
   )
}
