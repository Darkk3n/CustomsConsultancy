import { useEffect, useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { InquiryModel, InquiryResponseModel } from '../../../../CustomsConsultancy.Web/src/Models/InquiryModel';
import http from "../../api/adminAgent";
import './InquiryDetails.css';

export const InquiryDetails = () => {
	const { inquiryid } = useParams();
	const inquiryIdParsed = Number(inquiryid);
	const [inquiryDtl, setInquiryDtl] = useState<InquiryModel>();
	const [response, setResponse] = useState('')

	const { register, handleSubmit, reset } = useForm<InquiryResponseModel>();

	const onSubmit = (data: InquiryResponseModel) => {
		data.inquiryId = inquiryIdParsed;
		http.Inquiries.answer(data)
			.then((q: InquiryModel) => {
				toast.success('Respuesta enviada con exito.');
				setResponse('');
				reset();
				setInquiryDtl(q);
			});
	}

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
			{inquiryDtl?.answered === false
				?
				<>
					<Row>
						<Col md={12}>
							<Form.Label className="form-myLabel">Respuesta:</Form.Label>
						</Col>
					</Row>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Row>
							<textarea style={{ resize: 'none' }} rows={8} className='w-100 mt-1 mb-1 p-1' placeholder='Respuesta a pregunta' {...register('response')} onChange={(e) => setResponse(e.target.value)} />
						</Row>
						<Row>
							<Button variant='success' disabled={!response} type='submit'>Enviar</Button>
						</Row>
					</form>
				</>
				:
				<>
					<Row>
						<Form.Label className="form-myLabel">Respuesta:</Form.Label>
						<Form.Text className="form-text">
							{inquiryDtl?.answer}
						</Form.Text>
					</Row>
				</>
			}
		</Container >
	)
}
