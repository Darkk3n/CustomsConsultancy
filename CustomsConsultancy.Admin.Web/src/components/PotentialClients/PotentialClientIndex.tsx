import { useEffect, useState } from "react";
import { Container, Modal, Tab, Tabs } from "react-bootstrap";
import { PotentialClientsList } from ".";
import http from "../../api/adminAgent";
import { PotentialClientModel, PotentialClientSelectableModel } from "../../models";

export const PotentialClientIndex = () => {
	const [potentialClients, setPotentialClients] = useState<PotentialClientModel[]>([])
	const [selected, setSelected] = useState<PotentialClientSelectableModel[]>([]);
	const [potentialClientsContacted, setPotentialClientsContacted] = useState<PotentialClientModel[]>([])
	const [showModal, setShowModal] = useState<boolean>(false);

	useEffect(() => {
		http.PotentialClients.getAll()
			.then((d: PotentialClientModel[]) => {
				setPotentialClients(d.filter(r => !r.contacted))
				setPotentialClientsContacted(d.filter(r => r.contacted))
				setSelected(d.map(r => {
					const obj: PotentialClientSelectableModel = { id: r.id, email: r.email, selected: false };
					return obj;
				}))
			});
	}, [])


	const handleCheck = (email: string, checked: boolean) => {
		const data = [...selected];
		const element = data.filter(r => r.email === email)[0];
		element.selected = checked;
		setSelected(data);
	}


	return (
		<Container>
			<Tabs>
				<Tab title="No Contactados" eventKey='noContacted'>
					<PotentialClientsList clientList={potentialClients} isContacted={false} handleCheck={handleCheck} showModal={() => setShowModal(true)} />
				</Tab>
				<Tab title="Contactados" eventKey='contacted'>
					<PotentialClientsList clientList={potentialClientsContacted} isContacted={true} handleCheck={() => { }} />
				</Tab>
			</Tabs>
			<Modal show={showModal} onHide={() => setShowModal(false)}>
				<Modal.Header style={{ color: 'black' }}>
					Envio de correos electronicos
				</Modal.Header>
				<Modal.Body style={{ color: 'black' }}>
					Foo
				</Modal.Body>
			</Modal>
		</Container>
	)
}
