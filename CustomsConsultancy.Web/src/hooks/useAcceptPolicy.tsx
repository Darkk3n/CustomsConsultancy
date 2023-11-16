import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { PrivacyAgreement } from "../components";

export function useAcceptPolicy() {
   const [displayPrivacyAgreement, setDisplayPrivacyAgreement] = useState<boolean>(false)
   const [acceptedPolicy, setAcceptedPolicy] = useState<boolean>(false)

   const acceptPolicyElement: JSX.Element =
      <>
         {displayPrivacyAgreement && <PrivacyAgreement showModal={displayPrivacyAgreement} hideModal={setDisplayPrivacyAgreement} />}
         <Row>
            <Col md={3}>
               <Button style={{ fontSize: '1.5rem' }} variant='link' onClick={() => setDisplayPrivacyAgreement(!displayPrivacyAgreement)}>Politica de Privacidad</Button>
            </Col>
         </Row><Row>
            <Col md={4}>
               <input className='p-0' type='checkbox' onClick={() => setAcceptedPolicy(!acceptedPolicy)} value='Acepto la poltica de privacidad' />Acepto la poltica de privacidad
            </Col>
         </Row><Row>
            <Col md={12}>
               <Button variant='success' disabled={!acceptedPolicy} type='submit'>Enviar</Button>
            </Col>
         </Row>
      </>

   return { acceptPolicyElement, setAcceptedPolicy, acceptedPolicy };
}

