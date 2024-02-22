import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { CourseIndexModel } from '../../models/Courses/CourseIndexModel';

export const CourseIndex = () => {
	const data: CourseIndexModel[] =
		[
			{
				title: 'Curso 1',
				duration: '2 horas'
			}
		]

	useEffect(() => {

	}, [])

	return (
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
						</tr>
					})
				}
			</tbody>
		</Table>
	)
}
