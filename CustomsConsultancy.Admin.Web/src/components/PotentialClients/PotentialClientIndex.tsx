import { useEffect, useState } from "react";
import { Button, Container, Modal, Tab, Tabs } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { PotentialClientsList } from ".";
import http from "../../api/adminAgent";
import { PotentialClientForm, PotentialClientModel, PotentialClientSelectableModel } from "../../models";

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
				}));
			});
	}, [])


	const handleCheck = (id: number, checked: boolean) => {
		const data = [...selected];
		const element = data.filter(r => r.id === id)[0];
		element.selected = checked;
		setSelected(data);
		setEnableButton(selected.filter(r => r.selected).length > 0);
	}

	const { register, handleSubmit, reset } = useForm<PotentialClientForm>();

	const resetCheckBoxes = () => {
		const checkBoxes = document.querySelectorAll<HTMLInputElement>('input[type=checkbox]')
		checkBoxes.forEach(r => r.checked = false);
	}

	const onSubmit = (data: PotentialClientForm) => {
		http.PotentialClients
			.contact(data)
			.then((r: PotentialClientModel[]) => {
				reset();
				setPotentialClients(r.filter(r => !r.contacted));
				setPotentialClientsContacted(r.filter(r => r.contacted));
				setSelected([]);
				setShowModal(false);
				resetCheckBoxes();
			});
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
						<div>Enviar correo electronico a:
							<ul>
								{
									selected.filter(r => r.selected)
										.map((r, index) => {
											return <li key={index}>{r.email}</li>
										})
								}
							</ul>
						</div>
					</div>
				</Modal.Header>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Modal.Body style={{ color: 'black' }}>
						<input type="hidden" value={selected.filter(r => r.selected).map(r => r.id.toString())} {...register('potentialClientIds')} />
						<textarea style={{ resize: 'none' }} rows={5} cols={55} {...register('message')} />
					</Modal.Body>
					<Modal.Footer>
						<Button type="submit" variant="primary">Enviar</Button>
					</Modal.Footer>
				</form>
			</Modal>
		</Container>
	)
}
