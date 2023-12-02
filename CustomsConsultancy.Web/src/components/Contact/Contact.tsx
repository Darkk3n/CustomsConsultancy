import { Col, Container, Row } from 'react-bootstrap'
import { ContactForm, ContactInfo } from '.'
import './Contact.css'

export const Contact = () => {
	return (
		<Container fluid className='background-contact'>
			<Row>
				<Col md={3}>
					<ContactInfo />
				</Col>
				<Col md={8}>
					<ContactForm />
				</Col>
				<Col></Col>
			</Row>
		</Container>
	)
}
