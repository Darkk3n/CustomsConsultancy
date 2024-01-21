import { useEffect, useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import http from "../../api/adminAgent";
import { PotentialClientModel } from "../../models";

export const PotentialClientList = () => {
	const [potentialClients, setPotentialClients] = useState<PotentialClientModel[]>([])

	useEffect(() => {
		http.PotentialClients.getAll()
			.then(d => setPotentialClients(d));
	}, [])

	// const { register, handleSubmit } = useForm<PotentialClientEmail[]>();


	return (
		<Container>
			<div style={{ paddingBottom: '10px', display: 'flex', justifyContent: "flex-end" }}>
				<Button variant="primary" type="submit">Enviar Email</Button>
			</div>
			<Table bordered responsive='md'>
				<thead>
					<tr>
						<th></th>
						<th>Nombre</th>
						<th>Correo Electronico</th>
						<th>Tipo de Cliente</th>
						<th>Temas de interes</th>
					</tr>
				</thead>
				<tbody>
					{
						potentialClients.map((pc: PotentialClientModel, index) => {
							return (<tr key={index}>
								<td>
									<Form.Check id={`check-${index}`} />
								</td>
								<td>{pc.name}</td>
								<td>{pc.email}</td>
								<td>{pc.otherClientType !== null ? pc.otherClientType : pc.clientType}</td>
								<td>{pc.topicsOfInterest}</td>
							</tr>)
						})
					}
				</tbody>
			</Table>
		</Container>
	)
}
