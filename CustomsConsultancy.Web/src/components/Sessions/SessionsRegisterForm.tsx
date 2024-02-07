import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { toast } from 'sonner';
import { PotentialClientModel } from "../../Models/PotentialClientModel";
import http from "../../api/agent";
import { useAcceptPolicy } from "../../hooks/useAcceptPolicy";
import { PhoneInput } from "../Inputs/PhoneInput";
import './SessionsRegisterForm.css';


export const SessionsRegisterForm = () => {
	const { register, control, handleSubmit, reset } = useForm<PotentialClientModel>({
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			clientType: 'Agente Aduanal',
			otherClientType: '',
			topicsOfInterest: ''
		}
	});

	const onSubmit = (data: PotentialClientModel) => {
		http.PotentialClients.create(data)
			.then(() => {
				console.log(data);
				toast.success('Registro enviado con exito.')
				reset();
				setAcceptedPolicy(false);
				setOtherClientType(false);
			})
			.catch(err => console.log(err));
	}
	const { acceptPolicyElement, setAcceptedPolicy } = useAcceptPolicy();

	const [otherClientType, setOtherClientType] = useState<boolean>(false)

	const onClientTypeChange = (target: EventTarget & HTMLSelectElement) => {
		setOtherClientType(target.selectedIndex === 4)
	}

	return (
		<Container>
			<form className="register-form" onSubmit={handleSubmit(onSubmit)}>
				<Row>
					<Col md={6}>
						<input required className='w-100 mt-1 mb-1 p-1' placeholder='Nombre' {...register('name')} />
					</Col>
					<Col md={6}>
						<input required className='w-100 mt-1 mb-1 p-1' placeholder='Correo Electrónico' {...register('email')} />
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<PhoneInput fieldName="phone" placeholder="Telefono" control={control} />
					</Col>
					<Col md={6}>
						<Form.Select placeholder="Tipo de Cliente" className='w-100 mt-1 mb-1 p-1 client-type' {...register('clientType')} onChange={(e) => onClientTypeChange(e.target)}>
							<option>Agente Aduanal</option>
							<option>Importador</option>
							<option>Exportador</option>
							<option>Estudiante</option>
							<option>Otro (Especifique)</option>
						</Form.Select>
					</Col>
					{
						otherClientType &&
						<>
							<Row>
								<Col md={6}></Col>
								<Col md={6}>
									<input className='w-100 mt-1 mb-1 ms-3' placeholder='Tipo de Cliente' {...register('otherClientType')} />
								</Col>
							</Row>
						</>
					}
				</Row>
				<Row>
					<Col md={12}>
						<textarea style={{ resize: 'none' }} rows={5} className='w-100 mt-1 mb-1' placeholder='Temas de interés' {...register('topicsOfInterest')} />
					</Col>
				</Row>
				{acceptPolicyElement}
			</form>
		</Container>
	)
}
