import { Button, Form, Modal } from 'react-bootstrap';
import { CourseIndexModel } from '../../models/Courses/CourseIndexModel';

type CourseDeleteConfirmProps =
	{
		closeModal: () => void;
		course: CourseIndexModel | undefined;
		onConfirm: (courseId: number | undefined) => void;
		visible: boolean;
	}

export const CourseDeleteConfirm = ({ closeModal, course, onConfirm, visible }: CourseDeleteConfirmProps) => {
	return (
		<Form>
			<Modal show={visible} onHide={closeModal}>
				<Modal.Title style={{ color: 'black', marginLeft: '1rem', marginTop: '1rem' }}>I.C. Aduanal Administracion</Modal.Title>
				<Modal.Body style={{ color: 'black' }}>
					<p>{`Borrar el curso: ${course?.title}?`}</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='primary' onClick={() => onConfirm(course?.id)}>Aceptar</Button>
					<Button variant='secondary' onClick={closeModal}>Cancelar</Button>
				</Modal.Footer>
			</Modal>
		</Form>
	)
}
