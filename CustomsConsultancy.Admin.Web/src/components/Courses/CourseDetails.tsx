import { useEffect, useMemo, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import http from "../../api/adminAgent";
import { CourseModel } from '../../models/Courses/CourseIndexModel';

export const CourseDetails = () => {
	const { courseId } = useParams();
	const numCourseId = useMemo(() => Number(courseId), [courseId]);
	const [course, setCourse] = useState<CourseModel>()

	const newCourse = numCourseId === 0;

	useEffect(() => {
		http.Courses
			.getById(numCourseId)
			.then(r => setCourse(r))
	}, [numCourseId])

	const { handleSubmit, register } = useForm<CourseModel>()

	const onSubmit = (data: CourseModel) => { }

	return (
		<Container>
			{newCourse
				? <h1>Nuevo Curso</h1>
				: <h1>Editar Curso: {course?.title}</h1>
			}
			<form onSubmit={handleSubmit(onSubmit)}>
				<Row>
					<Col md={6}>
						<input className="w-100 mb-3" placeholder="Nombre" {...register("title")} />
					</Col>
					<Col md={6}>
						<input className="w-100 mb-3" placeholder="Duracion" {...register("duration")} />
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<input className="w-100 mb-3" placeholder="Precio" {...register("price")} />
					</Col>
					<Col md={6}>
						<input className="w-100 mb-3" placeholder="Nombre de Archivo" {...register("fileName")} />
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<input className="w-100 mb-3" placeholder="Estatus" {...register("status")} />
					</Col>
					<Col md={6}>
						<input className="w-100 mb-3" placeholder="ID Video TikTok" {...register("videoId")} />
					</Col>
				</Row>
				<Row>
					<Col md={12}>
						<Button type="submit" variant="primary">Guardar</Button>
					</Col>
				</Row>
			</form>
		</Container>
	)
}
