import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CourseDeleteConfirm } from ".";
import http from "../../api/adminAgent";
import { CourseIndexModel } from '../../models/Courses/CourseIndexModel';

export const CourseIndex = () => {
	const [courses, setCourses] = useState<CourseIndexModel[]>([]);
	useEffect(() => {
		http.Courses
			.list()
			.then(r => setCourses(r))
	}, []);

	const [showDeleteConfirm, setShowDeleteConfirm] = useState<boolean>(false);
	const [courseToDelete, setCourseToDelete] = useState<CourseIndexModel>();

	const setDeleteCourse = (course: CourseIndexModel) => {
		setCourseToDelete(course);
		setShowDeleteConfirm(true);
	}

	const onCancel = () => setShowDeleteConfirm(false);

	const navigate = useNavigate();

	const moveToDetails = (courseId?: number) => {
		if (courseId)
			navigate(`/courses/${courseId}`)
		else
			navigate('/courses/0')
	}

	const deleteCourse = (courseId: number | undefined) => {
		http.Courses.delete(courseId!)
			.then(() => http.Courses.list()
				.then((r) => setCourses(r))
				.then(() => setShowDeleteConfirm(false)));
	}


	return (
		<>
			{
				showDeleteConfirm && <CourseDeleteConfirm closeModal={onCancel} course={courseToDelete} onConfirm={deleteCourse} visible={showDeleteConfirm} />
			}
			<Container>
				<div className="email-btn">
					<Button variant="primary" type="submit" onClick={() => moveToDetails()}>Agregar Nuevo</Button>
				</div>
				<Table bordered responsive='md'>
					<thead>
						<tr>
							<th>Titulo</th>
							<th>Duracion</th>
							<th>Impartido</th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{
							courses.map((d: CourseIndexModel, index: number) => {
								return <tr key={index}>
									<td>{d.title}</td>
									<td>{d.duration}</td>
									<td><input type="checkbox" checked={!d.isActive} /></td>
									<td><Button variant="info" onClick={() => moveToDetails(d.id)}>Editar</Button></td>
									<td><Button variant="danger" onClick={() => setDeleteCourse(d)}>Eliminar</Button></td>
								</tr>
							})
						}
					</tbody>
				</Table>
			</Container>
		</>
	)
}
