import { useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { CourseIndexModel } from '../../models/Courses/CourseIndexModel';

export const CourseIndex = () => {
	const data: CourseIndexModel[] =
		[
			{
				title: 'Curso 1',
				duration: '2 horas'
			},
			{
				title: 'Curso 2',
				duration: '1 hora'
			}
		]

	useEffect(() => {

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
						data.map((d: CourseIndexModel, index: number) => {
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
