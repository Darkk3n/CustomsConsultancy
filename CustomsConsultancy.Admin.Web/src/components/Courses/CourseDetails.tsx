import { es } from 'date-fns/locale/es';
import { useEffect, useMemo, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import http from "../../api/adminAgent";
import { CourseCreateModel, CourseModel } from '../../models/Courses/CourseIndexModel';
import './Course.css';
import './CourseDetails.css';

export const CourseDetails = () => {
	registerLocale('es', es)
	const { courseId } = useParams();
	const numCourseId = useMemo(() => Number(courseId), [courseId]);
	const [course, setCourse] = useState<CourseModel>()

	const newCourse = numCourseId === 0;
	const { handleSubmit, register, setValue, reset } = useForm<CourseModel>({ defaultValues: course })

	const [checkValue, setCheckValue] = useState<boolean>(false);
	const [dueDate, setDueDate] = useState<Date | null>(new Date());

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
					setValue("isActive", r.isActive);
					setValue("fileName", r.fileName);
					setValue("videoId", r.videoId);
					setValue("dateDue", r.dateDue);
					setCheckValue(r.isActive);
					setDueDate(new Date(r.dateDue));
				})
		}
	}, [numCourseId, setDueDate, setValue])

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

	const setCheck = () => {
		setCheckValue(!checkValue);
		setValue("isActive", !checkValue);
	}

	const setDateValue = (date: Date | null) => {
		setDueDate(date);
		setValue("dateDue", date!.toLocaleDateString());
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
						<label>Titulo</label>
						<input className="w-100 mb-3" placeholder="Nombre" {...register("title")} />
					</Col>
					<Col md={6}>
						<label>Duracion</label>
						<input className="w-100 mb-3" placeholder="Duracion" {...register("duration")} />
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<label>Precio</label>
						<input className="w-100 mb-3" placeholder="Precio" {...register("price")} />
					</Col>
					<Col md={6}>
						<label>Nombre de archivo</label>
						<input className="w-100 mb-3" placeholder="Nombre de Archivo" {...register("fileName")} />
					</Col>
				</Row>
				<Row>
					<Col md={6} className="d-flex flex-column">
						<label>Fecha</label>
						<DatePicker className="w-100 mb-3" locale='es' selected={dueDate} onChange={(date) => setDateValue(date)} />
					</Col>
					<Col md={6}>
						<label>ID Video TikTok</label>
						<input className="w-100 mb-3" placeholder="ID Video TikTok" {...register("videoId")} />
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<label>Activo</label>
						<input type="checkbox"
							defaultChecked={checkValue}
							className="w-100 mb-3 check-given"
							placeholder="Estatus"
							{...register("isActive")}
							onChange={setCheck} />
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
