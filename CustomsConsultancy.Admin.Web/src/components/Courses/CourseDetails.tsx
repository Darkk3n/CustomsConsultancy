import { useEffect, useMemo, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import http from "../../api/adminAgent";
import { CourseCreateModel, CourseModel } from '../../models/Courses/CourseIndexModel';

export const CourseDetails = () => {
	const { courseId } = useParams();
	const numCourseId = useMemo(() => Number(courseId), [courseId]);
	const [course, setCourse] = useState<CourseModel>()

	const newCourse = numCourseId === 0;
	const { handleSubmit, register, setValue, reset } = useForm<CourseModel>({ defaultValues: course })

	useEffect(() => {
		if (numCourseId !== 0) {
			http.Courses
				.getById(numCourseId)
				.then(r => {
					setCourse(r);
					setValue("id", r.id);
					setValue("title", r.title);
					setValue("price", r.price);
					setValue("duration", r.duration);
					setValue("status", r.status);
					setValue("fileName", r.fileName);
					setValue("videoId", r.videoId);
				})
		}
	}, [numCourseId, setValue])

	const navigate = useNavigate();

	const onSubmit = (data: CourseCreateModel) => {
		if (newCourse) {
			http.Courses
				.create(data)
				.then(() => navigate('../courses'))
		}
		else {
			const updateData: CourseModel = {
				...data,
				id: course?.id
			}
			http.Courses
				.update(updateData)
				.then(() => navigate('../courses'))
		}
	}

	const onCancel = () => {
		reset();
		navigate('../courses');
	}

	return (
		<Container>
			{newCourse
				? <h1>Nuevo Curso</h1>
				: <h1>Editar Curso: {course?.title}</h1>
			}
			<form onSubmit={handleSubmit(onSubmit)}>
				<input type="hidden" {...register("id")} />
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
					<Col md={6}>
						<Button type="submit" variant="primary">Guardar</Button>
					</Col>
					<Col md={6}>
						<Button onClick={onCancel} variant="secondary">Cancelar</Button>
					</Col>
				</Row>
			</form>
		</Container>
	)
}
