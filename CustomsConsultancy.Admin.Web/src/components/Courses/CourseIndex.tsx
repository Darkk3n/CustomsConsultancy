import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import http from "../../api/adminAgent";
import { CourseIndexModel } from '../../models/Courses/CourseIndexModel';

export const CourseIndex = () => {
	const [courses, setCourses] = useState<CourseIndexModel[]>([]);
	useEffect(() => {
		http.Courses
			.list()
			.then(r => setCourses(r))
	}, []);

	const navigate = useNavigate();

	const moveToDetails = (courseId?: number) => {
		if (courseId)
			navigate(`/courses/${courseId}`)
		else
			navigate('/courses/0')
	}

	return (
		<Container>
			<div className="email-btn">
				<Button variant="primary" type="submit" onClick={() => moveToDetails()}>Agregar Nuevo</Button>
			</div>
			<Table bordered responsive='md'>
				<thead>
					<tr>
						<th>Titulo</th>
						<th>Duracion</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{
						courses.map((d: CourseIndexModel, index: number) => {
							return <tr key={index}>
								<td>{d.title}</td>
								<td>{d.duration}</td>
								<td><Button variant="secondary" onClick={() => moveToDetails(d.id)}>Editar</Button></td>
							</tr>
						})
					}
				</tbody>
			</Table>
		</Container>
	)
}
