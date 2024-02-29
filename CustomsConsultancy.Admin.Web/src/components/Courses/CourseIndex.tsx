import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import http from "../../api/adminAgent";
import { CourseIndexModel } from '../../models/Courses/CourseIndexModel';

export const CourseIndex = () => {
	const [courses, setCourses] = useState<CourseIndexModel[]>([]);
	useEffect(() => {
		http.Courses
			.list()
			.then(r => setCourses(r))
	}, [])

	return (
		<Container>
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
								<td><Button variant="primary">Editar</Button></td>
							</tr>
						})
					}
				</tbody>
			</Table>
		</Container>
	)
}
