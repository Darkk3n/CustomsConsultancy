import { Button, Modal } from 'react-bootstrap';

interface Props {
	showModal: boolean;
	hideModal: (value: boolean) => void
}

export const CourseSubscriptionAgreement = ({ showModal, hideModal }: Props) => {
	return (
		<Modal show={showModal} onHide={() => hideModal(false)}>
			<Modal.Header style={{ backgroundColor: 'gray' }}>
				<Modal.Title>
					I.C. Aduanal
				</Modal.Title>
			</Modal.Header>
			<Modal.Body style={{ backgroundColor: 'gray' }}>
				Course Subscription Agreement text
			</Modal.Body>
			<Modal.Footer style={{ backgroundColor: 'gray' }}>
				<Button variant="primary" onClick={() => hideModal(false)}>Cerrar</Button>
			</Modal.Footer>
		</Modal>
	)
}
