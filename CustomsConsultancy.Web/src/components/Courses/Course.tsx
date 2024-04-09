import { useEffect, useMemo, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import { CourseModel } from '../../Models';
import http from '../../api/agent';
import './Course.css';
export const Course = () => {
	const baseImg = '../src/assets/img/';

	const [selectedCourse, setSelectedCourse] = useState<CourseModel>()
	const { courseId } = useParams();
	const parsedCourseId = useMemo(() => Number(courseId), [courseId])

	useEffect(() => {
		//Use fetch here instead when the API project exists
		http.Courses.getById(parsedCourseId).then(r => setSelectedCourse(r))
	}, [courseId, parsedCourseId])

	return (
		<>
			<Container>
				<h1 className='regular-text'>{selectedCourse?.title}</h1>
			</Container>
			<Container>
				<Image src={`${baseImg}${selectedCourse?.fileName}`} />
			</Container>
			<Container>
				{
					selectedCourse?.videoId &&
					<NavLink to={`https://www.tiktok.com/@i.c.aduanal/video/${selectedCourse?.videoId}`} target='_blank' className='video-text'>
						Video Explicativo
					</NavLink>
				}
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
