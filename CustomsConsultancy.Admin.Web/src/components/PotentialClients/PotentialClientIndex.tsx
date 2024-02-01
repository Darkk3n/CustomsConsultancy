import { useEffect, useState } from "react";
import { Button, Container, Modal, Tab, Tabs } from "react-bootstrap";
import { PotentialClientsList } from ".";
import http from "../../api/adminAgent";
import { PotentialClientModel, PotentialClientSelectableModel } from "../../models";

export const PotentialClientIndex = () => {
	const [potentialClients, setPotentialClients] = useState<PotentialClientModel[]>([])
	const [selected, setSelected] = useState<PotentialClientSelectableModel[]>([]);
	const [enableButton, setEnableButton] = useState<boolean>(false)
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
		setEnableButton(selected.filter(r => r.selected).length > 0);
	}


	return (
		<Container>
			<Tabs>
				<Tab title="No Contactados" eventKey='noContacted'>
					<PotentialClientsList clientList={potentialClients} isContacted={false} handleCheck={handleCheck} showModal={() => setShowModal(true)} buttonEnabled={enableButton} />
				</Tab>
				<Tab title="Contactados" eventKey='contacted'>
					<PotentialClientsList clientList={potentialClientsContacted} isContacted={true} handleCheck={() => { }} />
				</Tab>
			</Tabs>
			<Modal show={showModal} onHide={() => setShowModal(false)}>
				<Modal.Header>
					<div style={{ display: 'flex', color: 'black' }}>
						<div>Enviar correo electronico a:</div>
						{
							selected.filter(r => r.selected)
								.map((r, index) => {
									return <ul>
										<li key={index}>{r.email}</li>
									</ul>
								})
						}
					</div>
				</Modal.Header>
				<Modal.Body style={{ color: 'black' }}>
					<form>
						<textarea style={{ resize: 'none' }} rows={5} cols={55} />
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary">Enviar</Button>
				</Modal.Footer>
			</Modal>
		</Container >
	)
}
