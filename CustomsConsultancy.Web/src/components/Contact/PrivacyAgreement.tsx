import { Button, Modal } from "react-bootstrap";

interface Props {
   showModal: boolean;
   hideModal: (value: boolean) => void
}

export const PrivacyAgreement = ({ showModal, hideModal }: Props) => {
   return (
      <Modal show={showModal} onHide={() => hideModal(false)}>
         <Modal.Header style={{ backgroundColor: 'gray' }}>
            <Modal.Title>
               I.C. Aduanal
            </Modal.Title>
         </Modal.Header>
         <Modal.Body style={{ backgroundColor: 'gray' }}>
            <h3>Aviso de Privacidad</h3>
            <p>
               En cumplimiento a lo establecido por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, Andrés Aguilar Sánchez en adelante I.C. ADUANAL hace de su conocimiento lo siguiente:
            </p>
            <p>
               Los datos y/o información que de manera voluntaria nos proporcione o haya proporcionado, es completamente confidencial y se encuentra resguardada por I.C. ADUANAL quien es el responsable del uso y tratamiento de sus datos personales.
            </p>
            <p>
               La utilización de los datos recopilados será utilizada exclusivamente para:
               <ol type="I">
                  <li>Proveer servicios requeridos, así como actividades afines</li>
                  <li>Informar sobre nuevos servicios que estén relacionado con nuestra actividad</li>
                  <li>Dar cumplimiento a obligaciones contraídas con nuestros clientes</li>
                  <li>Evaluar la calidad del servicio</li>
                  <li>Fines de identificación</li>
                  <li>Fines estadísticos</li>
                  <li>Para invitar a los integrantes de esta a los eventos y promociones realizadas por I.C. ADUANAL y
                  </li>
                  <li>Para eventualmente contactarlo vía correo electrónico con el fin de compartirle noticias de interés sobre aspectos aduaneros, de comercio exterior y de derecho en general.</li>
               </ol>
            </p>
            <p>Quien desee ser dado de baja de nuestra base de datos podrá hacerlo por cualquiera de los siguientes medios:
            </p>
            <p>
               Enviar un correo electrónico a ic.aduanal@gmail.com con el asunto BAJA indicando la cuenta de correo que desee sea eliminada.
            </p>
            <p>
               Contactarnos vía telefónica al 229 463 9014 de lunes a viernes y de 9 AM a 5 PM indicando los datos de la cuenta de correo electrónico que desean sea removida de la base de datos
            </p>
            <p>
               <ol>
                  <li>Usted tiene el derecho de acceder a sus datos personales que poseemos y a los detalles del tratamiento de estos, así como a rectificarlos en caso de ser inexactos o darlos de baja cuando considere que resulten ser excesivos o innecesarios para las finalidades que justificaron su obtención u oponerse al tratamiento de estos para fines específicos.</li>
                  <li>Para limitar el uso o divulgación de sus datos personales, así como para ejercer los derechos de acceso, rectificación, cancelación u oposición, deberá presentar una solicitud al correo electrónico ic.aduanal@gmail.com</li>
                  <li>El presente Aviso de Privacidad podrá ser modificado y actualizado en cualquier momento. I.C. ADUANAL notificará los cambios al Aviso de Privacidad mediante el correo electrónico ic.aduanal@gmail.com</li>
               </ol>
            </p>
            <p>Responsable: Andrés Aguilar Sánchez y/o I.C. ADUANAL</p>
            <p>NO SE RECABA NINGÚN DATO PERSONAL SENSIBLE EN TÉRMINOS DE LA LEY. LOS DATOS QUE SE RECABAN SON NOMBRE DEL PARTICIPANTE, EMPRESA EN LA QUE TRABAJA, CORREO ELECTRÓNICO, DOMICILO FISCAL Y TELÉFONO</p>
         </Modal.Body>
         <Modal.Footer style={{ backgroundColor: 'gray' }}>
            <Button variant="primary" onClick={() => hideModal(false)}>Cerrar</Button>
         </Modal.Footer>
      </Modal>
   )
}
