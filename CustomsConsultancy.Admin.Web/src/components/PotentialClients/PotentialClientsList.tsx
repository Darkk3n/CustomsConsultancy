import { Button, Form, Table } from "react-bootstrap";
import { PotentialClientModel } from "../../models";
import './PotentialClientList.css';

interface IProps {
	clientList: PotentialClientModel[];
	isContacted: boolean;
	handleCheck: (email: string, checked: boolean) => void;
}


export const PotentialClientsList = ({ clientList, isContacted, handleCheck }: IProps) => {
	return (
		<>
			{
				isContacted
					? undefined
					: <div className="email-btn">
						<Button variant="primary" type="submit">Enviar Email</Button>
					</div>
			}
			< Table bordered responsive='md' >
				<thead>
					<tr>
						{
							!isContacted &&
							<th></th>
						}
						<th>Nombre</th>
						<th>Correo Electronico</th>
						<th>Tipo de Cliente</th>
						<th>Temas de interes</th>
					</tr>
				</thead>
				<tbody>
					{
						clientList.map((pc: PotentialClientModel, index) => {
							return (<tr key={index}>
								{
									!isContacted &&
									<td>
										<Form.Check id={`check-${index}`} onChange={(e) => handleCheck(pc.email, e.target.checked)} />
									</td>
								}
								<td>{pc.name}</td>
								<td>{pc.email}</td>
								<td>{pc.otherClientType !== null ? pc.otherClientType : pc.clientType}</td>
								<td>{pc.topicsOfInterest}</td>
							</tr>)
						})
					}
				</tbody>
			</Table >
		</>
	)
}
