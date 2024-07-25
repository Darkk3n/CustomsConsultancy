import { Button, Form, Table } from "react-bootstrap";
import { PotentialClientModel } from "../../models";
import './PotentialClientList.css';


interface IProps {
	clientList: PotentialClientModel[];
	isContacted: boolean;
	handleCheck: (id: number, checked: boolean) => void;
	showModal?: () => void;
	buttonEnabled?: boolean;
}


export const PotentialClientsList = ({ clientList, isContacted, handleCheck, showModal, buttonEnabled }: IProps) => {
	return (
		<>
			{
				isContacted
					? undefined
					: <div className="email-btn">
						<Button disabled={!buttonEnabled} onClick={showModal} variant="primary" type="submit">Enviar Email</Button>
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
						{
							isContacted &&
							<th>Fecha de Contacto</th>
						}
					</tr>
				</thead>
				<tbody>
					{
						clientList.map((pc: PotentialClientModel, index) => {
							return (<tr key={index}>
								{
									!isContacted &&
									<td>
										<Form.Check className="formCheck" id={`check-${index}`} onChange={(e) => handleCheck(pc.id, e.target.checked)} />
									</td>
								}
								<td>{pc.name}</td>
								<td>{pc.email}</td>
								<td>{pc.otherClientType !== null ? pc.otherClientType : pc.clientType}</td>
								<td>{pc.topicsOfInterest}</td>
								{isContacted && <td>{pc.dateContacted}</td>}
							</tr>)
						})
					}
				</tbody>
			</Table >
		</>
	)
}
