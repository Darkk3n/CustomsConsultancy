import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import http from "../../api/adminAgent";
import { PotentialClientModel } from "../../models";

export const PotentialClientList = () => {
	const [potentialClients, setPotentialClients] = useState<PotentialClientModel[]>([])

	useEffect(() => {
		http.PotentialClients.getAll()
			.then(d => setPotentialClients(d));
	}, [])

	return (
		<Container>
			<Table bordered responsive='md'>
				<thead>
					<tr>
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

// name: string;
// email: string;
// phone: string;
// clientType: string;
// otherClientType: string;
// topicsOfInterest: string;
