import { useEffect, useMemo, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
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


	useEffect(() => {
		http.Courses
			.getById(parsedCourseId)
			.then((d: CourseModel) => setCourse(d));

	}, [parsedCourseId])


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
				<hr />
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
									Reginmen fiscal de la empresa o persona fisica a la que se le factura (Obligatorio)
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
			</form>
		</Container>
	)
}
