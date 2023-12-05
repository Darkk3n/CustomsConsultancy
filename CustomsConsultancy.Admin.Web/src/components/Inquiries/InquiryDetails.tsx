import { useEffect, useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { InquiryModel } from '../../../../CustomsConsultancy.Web/src/Models/InquiryModel';
import http from "../../api/agent";
import './InquiryDetails.css';

export const InquiryDetails = () => {
	const { inquiryid } = useParams();
	const inquiryIdParsed = Number(inquiryid);
	const [inquiryDtl, setInquiryDtl] = useState<InquiryModel>();

	useEffect(() => {
		http.Inquiries.getById(inquiryIdParsed)
			.then(i => setInquiryDtl(i))
	}, [inquiryIdParsed])

	return (
		<Container>
			<Row>
				<Col md={6}>
					<Form.Label className="form-myLabel">Nombre:</Form.Label>
				</Col>
				<Col md={6}>
					<Form.Label className="form-myLabel">Apellido:</Form.Label>
				</Col>
			</Row>
			<Row>
				<Col md={6}>
					<Form.Text className="form-text">
						{inquiryDtl?.name}
					</Form.Text>
				</Col>
				<Col md={6}>
					<Form.Text>
						{inquiryDtl?.lastName}
					</Form.Text>
				</Col>
			</Row>
			<Row>
				<Col md={6}>
					<Form.Label className="form-myLabel">Empresa o Razon Social:</Form.Label>
				</Col>
				<Col md={6}>
					<Form.Label className="form-myLabel">Correo Electronico:</Form.Label>
				</Col>
			</Row>
			<Row>
				<Col md={6}>
					<Form.Text className="form-text">
						{inquiryDtl?.company}
					</Form.Text>
				</Col>
				<Col md={6}>
					<Form.Text className="form-text">
						{inquiryDtl?.email}
					</Form.Text>
				</Col>
			</Row>
			<Row>
				<Col md={6}>
					<Form.Label className="form-myLabel">Telefono:</Form.Label>
				</Col>
				<Col md={6}>
					<Form.Label className="form-myLabel">WhatsApp:</Form.Label>
				</Col>
			</Row>
			<Row>
				<Col md={6}>
					<Form.Text>
						{inquiryDtl?.phone}
					</Form.Text>
				</Col>
				<Col md={6}>
					<Form.Text className="form-text">
						{inquiryDtl?.mobilePhone}
					</Form.Text>
				</Col>
			</Row>
			<Row>
				<Col md={12}>
					<InputGroup>
						<Form.Label className="form-myLabel">Pregunta:</Form.Label>
						<Form.Label style={{ paddingLeft: '10px' }} className="form-text">
							{inquiryDtl?.inquiry}
						</Form.Label>
					</InputGroup>
				</Col>
			</Row>
		</Container>
	)
}
