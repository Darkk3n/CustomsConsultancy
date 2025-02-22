import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { CourseModel, CourseSubscriptionModel } from "../../Models";
import http from "../../api/agent";
import { CourseSubscriptionAgreement, PrivacyAgreement } from "../Contact";
import './CourseSubscription.css';
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const CourseSubscription = () => {
	const { courseId } = useParams();
	const parsedCourseId = useMemo(() => Number(courseId), [courseId]);
	const [course, setCourse] = useState<CourseModel | undefined>(undefined);
	const [showInvoiceData, setShowInvoiceData] = useState<boolean>(false);
	const [checkYesValue, setCheckYesValue] = useState<boolean>(false);
	const [checkNoValue, setCheckNoValue] = useState<boolean>(true);
	const [paymentForm, setPaymentForm] = useState<string>('');
	const [displayPrivacyAgreement, setDisplayPrivacyAgreement] = useState<boolean>(false);
	const [displayCourseSubscriptionAgreement, setDisplayCourseSubscriptionAgreement] = useState<boolean>(false);
	const [canSubmit, setCanSubmit] = useState<boolean>(false);
	const [readPrivacyAgreement, setReadPrivacyAgreement] = useState<boolean>(false);
	const [readCourseSubscriptionAgreement, setReadCourseSubscriptionAgreement] = useState<boolean>(false);
	const fileInputRef = useRef<HTMLInputElement>(null);


	useEffect(() => {
		http.Courses
			.getById(parsedCourseId)
			.then((d: CourseModel) => setCourse(d));
	}, [parsedCourseId])

	const handlePaymentFormChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPaymentForm(e.target.value);
		setValue("paymentMethod", e.target.value);
	}

	const navigate = useNavigate();

	const { handleSubmit, setValue, register, watch } = useForm<CourseSubscriptionModel>();
	const files = watch('proofOfPayment');
	const formValues = watch();

	const onSubmit = (data: CourseSubscriptionModel) => {
		data.courseId = parsedCourseId;
		http.CourseRegistration
			.create(data)
			.then(() => toast.success('Registro realizado con exito.'))
			.then(() => navigate(`../${courseId}`))
			.catch((err) => {
				toast.error(`Ocurrio un error: ${err}`)
			});
	}

	useEffect(() => {
		if (showInvoiceData) {
			setCanSubmit(
				!!formValues.rfc &&
				!!formValues.personOrCompanyName &&
				!!formValues.postalCode &&
				!!formValues.taxRegime &&
				!!formValues.taxPayerEmail &&
				!!formValues.firstName &&
				!!formValues.lastName &&
				!!formValues.email &&
				!!paymentForm &&
				!!readPrivacyAgreement &&
				!!readCourseSubscriptionAgreement
			);
		} else {
			setCanSubmit(
				!!formValues.firstName &&
				!!formValues.lastName &&
				!!formValues.email &&
				!!paymentForm &&
				!!readPrivacyAgreement &&
				!!readCourseSubscriptionAgreement
			);
		}
	}, [formValues, paymentForm, readCourseSubscriptionAgreement, readPrivacyAgreement, showInvoiceData]);

	const handleChecks = (value: boolean) => {
		setShowInvoiceData(value);
		setCheckYesValue(value);
		setCheckNoValue(!value);
		setValue("requiresInvoice", value);
	}

	const handleInputFileChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		if (!target.files) return;

		setValue('proofOfPayment', target.files);
	}

	const exceedsMaxSize = useMemo(() => {
		if (!files) return false;

		const maxSize = 64 * 1024 * 1024;
		const itemsSize = Array.from(files!).reduce((prev, curr) => prev + curr.size, 0);

		return itemsSize > maxSize;
	}, [files]);

	return (
		<Container style={{ color: 'black' }} className="w-100">
			<Form onSubmit={handleSubmit(onSubmit)}>
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
					<input style={{ marginLeft: '0.75rem', height: "1.5rem", width: "1.5rem" }}
						type="checkbox"
						onChange={() => handleChecks(true)}
						checked={checkYesValue} />
				</Row>
				<Row className="left-margin">
					No
					<input
						className="left-margin"
						style={{ height: "1.5rem", width: "1.5rem", marginTop: '0.5rem' }} type="checkbox"
						onChange={() => handleChecks(false)}
						checked={checkNoValue} />
				</Row>
				{
					showInvoiceData
						? <>
							<Row>
								<Col md={12}>
									RFC de facturacion <span className="mandatory">(Obligatorio)</span>
								</Col>
							</Row>
							<Row>
								<Col md={12}>
									<input type="text" className="w-100" {...register("rfc")} />
								</Col>
							</Row>
							<Row>
								<Col md={6}>
									Nombre de la empresa o persona fisica a la que se le factura <span className="mandatory">(Obligatorio)</span>
								</Col>
								<Col md={6}>
									Codigo Postal del domicilio fiscal <span className="mandatory">(Obligatorio)</span>
								</Col>
							</Row>
							<Row>
								<Col md={6}>
									<input type="text" className="w-100" {...register("personOrCompanyName")} />
								</Col>
								<Col md={6}>
									<input type="text" className="w-100" {...register("postalCode")} />
								</Col>
							</Row>
							<Row>
								<Col md={6}>
									Regimen fiscal de la empresa o persona fisica a la que se le factura <span className="mandatory">(Obligatorio)</span>
								</Col>
								<Col md={6}>
									Correo Electronico <span className="mandatory">(Obligatorio)</span>
								</Col>
							</Row>
							<Row>
								<Col md={6}>
									<Form.Select className="dropdown-style" {...register("taxRegime")}>
										<option value={0}>-- SELECCIONE --</option>
										<option value={1}>601 General de Ley Personas Morales</option>
										<option value={2}>603 Personas Morales con Fines no Lucrativos</option>
										<option value={3}>605 Sueldos y Salarios e Ingresos Asimilados a Salarios</option>
										<option value={4}>606 Arrendamiento</option>
										<option value={5}>607 Régimen de Enajenación o Adquisición de Bienes</option>
										<option value={6}>608 Demás ingresos</option>
										<option value={7}>610 Residentes en el Extranjero sin Establecimiento Permanente en México</option>
										<option value={8}>611 Ingresos por Dividendos (socios y accionistas)</option>
										<option value={9}>612 Personas Físicas con Actividades Empresariales y Profesionales</option>
										<option value={10}>614 Ingresos por intereses</option>
										<option value={11}>615 Régimen de los ingresos por obtención de premios</option>
										<option value={12}>616 Sin obligaciones fiscales</option>
										<option value={13}>620 Sociedades Cooperativas de Producción que optan por diferir sus ingresos</option>
										<option value={14}>621 Incorporación Fiscal</option>
										<option value={15}>622 Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras</option>
										<option value={16}>623 Opcional para Grupos de Sociedades</option>
										<option value={17}>624 Coordinados</option>
										<option value={18}>625 Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas</option>
										<option value={19}>626 Régimen Simplificado de Confianza</option>
									</Form.Select>
								</Col>
								<Col md={6}>
									<input type="text" className="w-100" {...register("taxPayerEmail")} />
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
				<Row className="mt-2">
					<h3>Datos de participante</h3>
				</Row>
				<hr />
				<Row>
					<Col md={6}>
						<p>1. Nombre del participante <span className="mandatory">(Obligatorio)</span></p>
					</Col>
					<Col md={6}>
						<p>2. Correo del participante <span className="mandatory">(Obligatorio)</span></p>
					</Col>
				</Row>
				<Row>
					<Col md={3}>
						<input type="text" className="w-100"  {...register("firstName")} />
					</Col>
					<Col md={3}>
						<input type="text" className="w-100" {...register("lastName")} />
					</Col>
					<Col md={6}>
						<input type="text" className="w-100" {...register("email")} />
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
						<p>Forma de Pago <span className="mandatory">(Obligatorio)</span></p>
						<div className="d-flex flex-column">
							<Form.Group>
								<Form.Check type="radio" label='Deposito en Efectivo' name='paymentForm' value="cash" onChange={(e) => handlePaymentFormChange(e)} />
								<Form.Check type="radio" label='Transferencia' name='paymentForm' value="transfer" onChange={(e) => handlePaymentFormChange(e)} />
								{/* <Form.Check type="radio" label='Tarjeta de Credito (Solo meses sin intereses)' value="msi" name='paymentForm' onChange={(e) => handlePaymentFormChange(e)} />
								<Form.Check type="radio" label='Tarjeta de Credito/Debito' name='paymentForm' value="tdc" onChange={(e) => handlePaymentFormChange(e)} />
								<Form.Check type="radio" label='PayPal' name='paymentForm' value="paypal" onChange={(e) => handlePaymentFormChange(e)} /> */}
							</Form.Group>

						</div>
					</Col>
					{
						["cash", "transfer"].includes(paymentForm) &&
						<Col md={6}>
							<p>Adjuntar comprobante de pago. <span className="mandatory">(Obligatorio)</span></p>
							<p>Tamaño maximo de archivo: 64MB.</p>
							<p>No se procesaran inscripciones sin comprobante de pago</p>
							<p>INFORMACION DE PAGO:</p>
							<p>BBVA Cta: 11111111</p>
							<p>Titular: Andres Aguilar Sanchez</p>
							<p>CLABE:111111111111111</p>
							<p>RFC:XXXXXXXXX</p>
							<Button variant="primary" onClick={() => fileInputRef.current?.click()}>Subir archivo</Button>
							{exceedsMaxSize && <p className="text-danger pt-2">Excedido limite de tamaño de archivo. Por favor, seleccione un archivo mas chico para continuar.</p>}
						</Col>
					}
				</Row>
				<hr />
				<Row>
					<p>Leer el aviso de privacidad <span className="mandatory">(Obligatorio)</span></p>
					<Form.Check type="radio" onClick={() => setReadPrivacyAgreement(true)} label={
						<span>
							He leido y estoy de acuerdo con el
							{" "}<Button className="btn btn-link p-0" onClick={() => setDisplayPrivacyAgreement(true)}>acuerdo de privacidad</Button>
						</span>
					} name='privacyStatement' />
				</Row>
				<Row>
					<p className="pt-2">Politicas de inscripcion a cursos <span className="mandatory">(Obligatorio)</span></p>
					<Form.Check type="radio" onClick={() => setReadCourseSubscriptionAgreement(true)} label={
						<span>
							He leido y estoy de acuerdo con las
							{" "}<Button className="btn btn-link p-0" onClick={() => setDisplayCourseSubscriptionAgreement(true)}>políticas de inscripción a cursos</Button>
						</span>
					} name='courseInscriptionPolicy' />
				</Row>
				<input {...register('proofOfPayment')} ref={fileInputRef} multiple type="file" accept="application/pdf" hidden={true} onChange={handleInputFileChange} />

				<Button disabled={!canSubmit} type='submit' variant="primary">Enviar</Button>
				<Button className="ms-2" variant="secondary" onClick={() => navigate(`/courses/${courseId}`)}>Cancelar</Button>
			</Form>
			{displayPrivacyAgreement && <PrivacyAgreement showModal={displayPrivacyAgreement} hideModal={setDisplayPrivacyAgreement} />}
			{displayCourseSubscriptionAgreement && <CourseSubscriptionAgreement showModal={displayCourseSubscriptionAgreement} hideModal={setDisplayCourseSubscriptionAgreement} />}
		</Container>
	)
}
