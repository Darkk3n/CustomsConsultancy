import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CourseModel } from "../../Models";
import http from "../../api/agent";
import './CourseSubscription.css';

export const CourseSubscription = () => {
	const { courseId } = useParams();
	const parsedCourseId = useMemo(() => Number(courseId), [courseId]);
	const [course, setCourse] = useState<CourseModel | undefined>(undefined);
	const [showInvoiceData, setShowInvoiceData] = useState<boolean>(false);
	const [checkYesValue, setCheckYesValue] = useState<boolean>(false);
	const [checkNoValue, setCheckNoValue] = useState<boolean>(true);
	const [paymentForm, setPaymentForm] = useState<string>('');


	useEffect(() => {
		http.Courses
			.getById(parsedCourseId)
			.then((d: CourseModel) => setCourse(d));
	}, [parsedCourseId])

	const handlePaymentFormChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPaymentForm(e.target.value);
	}

	return (
		<Container style={{ color: 'black' }} className="w-100">
			<form>
				<h3>Datos del curso</h3>
				<hr />
				<Row className="left-margin">
					Curso al que se desea inscribir
				</Row>
				<Row className="left-margin">
					<Col md={3}>
						{course?.title}
					</Col>
					<Col md={3}>
						Precio ${course?.price}
					</Col>
				</Row>
				<h3>Datos de facturacion</h3>
				<hr />
				<Row className="left-margin">
					Desea factura? (Su factura se emitira de manera posterior al pago)
				</Row>
				<Row className="left-margin">
					Si
					<input style={{ marginLeft: '0.75rem', height: "1.5rem", width: "1.5rem" }} type="checkbox" onChange={() => {
						setShowInvoiceData(true);
						setCheckYesValue(true);
						setCheckNoValue(false);
					}}
						checked={checkYesValue} />
				</Row>
				<Row className="left-margin">
					No
					<input className="left-margin" style={{ height: "1.5rem", width: "1.5rem", marginTop: '0.5rem' }} type="checkbox" onChange={() => {
						setShowInvoiceData(false);
						setCheckYesValue(false);
						setCheckNoValue(true);
					}}
						checked={checkNoValue} />
				</Row>
				{
					showInvoiceData
						? <>
							<Row className="left-margin">
								RFC de facturacion (Obligatorio)
							</Row>
							<Row>
								<Col md={12}>
									<input type="text" className="w-100" />
								</Col>
							</Row>
							<Row>
								<Col md={6}>
									Nombre de la empresa o persona fisica a la que se le factura (Obligatorio)
								</Col>
								<Col md={6}>
									Codigo Postal del domicilio fiscal (Obligatorio)
								</Col>
							</Row>
							<Row>
								<Col md={6}>
									<input type="text" className="w-100" />
								</Col>
								<Col md={6}>
									<input type="text" className="w-100" />
								</Col>
							</Row>
							<Row>
								<Col md={6}>
									Regimen fiscal de la empresa o persona fisica a la que se le factura (Obligatorio)
								</Col>
								<Col md={6}>
									Correo Electronico (Obligatorio)
								</Col>
							</Row>
							<Row>
								<Col md={6}>
									<Form.Select className="dropdown-style">
										<option>-- SELECCIONE --</option>
										<option>601 General de Ley Personas Morales</option>
										<option>603 Personas Morales con Fines no Lucrativos</option>
										<option>605 Sueldos y Salarios e Ingresos Asimilados a Salarios</option>
										<option>606 Arrendamiento</option>
										<option>607 Régimen de Enajenación o Adquisición de Bienes</option>
										<option>608 Demás ingresos</option>
										<option>610 Residentes en el Extranjero sin Establecimiento Permanente en México</option>
										<option>611 Ingresos por Dividendos (socios y accionistas)</option>
										<option>612 Personas Físicas con Actividades Empresariales y Profesionales</option>
										<option>614 Ingresos por intereses</option>
										<option>615 Régimen de los ingresos por obtención de premios</option>
										<option>616 Sin obligaciones fiscales</option>
										<option>620 Sociedades Cooperativas de Producción que optan por diferir sus ingresos</option>
										<option>621 Incorporación Fiscal</option>
										<option>622 Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras</option>
										<option>623 Opcional para Grupos de Sociedades</option>
										<option>624 Coordinados</option>
										<option>625 Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas</option>
										<option>626 Régimen Simplificado de Confianza</option>
									</Form.Select>
								</Col>
								<Col md={6}>
									<input type="text" className="w-100" />
								</Col>
							</Row>
							<Row>
								<Col md={6}>
									Indicar su regimen fiscal exactamente como aparece en su constancia de situacion fiscal
								</Col>
								<Col md={6}>
									ejemplo@ejemplo.com
								</Col>
							</Row>

						</>
						: undefined
				}
				<Row>
					<h3>Datos de participante</h3>
				</Row>
				<hr />
				<Row>
					<Col md={6}>
						<p>1. Nombre del participante <span>(Obligatorio)</span></p>
					</Col>
					<Col md={6}>
						<p>1. Correo del participante <span>(Obligatorio)</span></p>
					</Col>
				</Row>
				<Row>
					<Col md={3}>
						<input type="text" className="w-100" />
					</Col>
					<Col md={3}>
						<input type="text" className="w-100" />
					</Col>
					<Col md={6}>
						<input type="text" className="w-100" />
					</Col>
				</Row>
				<Row>
					<Col md={3}>
						<label>Nombre</label>
					</Col>
					<Col md={3}>
						<label>Apellidos</label>
					</Col>
					<Col md={6}>
						<label>ejemplo@ejemplo.com</label>
					</Col>
				</Row>
				<Row className="left-margin">
					Escribalo exactamente como desea que aparezca en el reconocimento (ejemplo Dr. Jose Sanchez Perez)
				</Row>
				<Row>
					<h3>Datos de Pago</h3>
					<hr />
					<Col md={6}>
						<p>Forma de Pago (Obligatorio)</p>
						<div className="d-flex flex-column">
							<Form.Group>
								<Form.Check type="radio" label='Deposito en Efectivo' name='paymentForm' value="cash" onChange={(e) => handlePaymentFormChange(e)} />
								<Form.Check type="radio" label='Transferencia' name='paymentForm' value="transfer" onChange={(e) => handlePaymentFormChange(e)} />
								<Form.Check type="radio" label='Tarjeta de Credito (Solo meses sin intereses)' value="msi" name='paymentForm' onChange={(e) => handlePaymentFormChange(e)} />
								<Form.Check type="radio" label='Tarjeta de Credito/Debito' name='paymentForm' value="tdc" onChange={(e) => handlePaymentFormChange(e)} />
								<Form.Check type="radio" label='PayPal' name='paymentForm' value="paypal" onChange={(e) => handlePaymentFormChange(e)} />
							</Form.Group>

						</div>
					</Col>
					{
						["cash", "transfer"].includes(paymentForm) &&
						<Col md={6}>
							<p>Adjuntar comprobante de pago. <span className="mandatory">(Obligatorio)</span></p>
							<p>Tama;o maximo de archivo: 64MB.</p>
							<p>No se procesaran inscripciones sin comprobante de pago</p>
							<p>INFORMACION DE PAGO:</p>
							<p>BBVA Cta: 11111111</p>
							<p>Titular: Andres Aguilar Sanchez</p>
							<p>CLABE:111111111111111</p>
							<p>RFC:XXXXXXXXX</p>
						</Col>
					}
				</Row>
				<hr />
				<Row>
					<p>Leer el aviso de privacidad <span className="mandatory">(Obligatorio)</span></p>
					<Form.Check type="radio" label='He leido y estoy de acuerdo con el aviso de privacidad' name='privacyStatement' />
				</Row>
				<Row>
					<p>Politicas de inscripcion a cursos <span className="mandatory">(Obligatorio)</span></p>
					<Form.Check type="radio" label='He leido y estoy de acuerdo con políticas de inscripción a cursos' name='courseInscriptionPolicy' />
				</Row>
				<Button variant="primary" type="submit">Enviar</Button>
			</form>
		</Container>
	)
}
