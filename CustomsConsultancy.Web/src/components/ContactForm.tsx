import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { PrivacyAgreement } from '.';
import './ContactForm.css';

export const ContactForm = () => {
   const schema = yup.object({
      name: yup.string().required('Se requiere un nombre'),
      lastName: yup.string().required('Se requiere por lo menos un apellido'),
      company: yup.string().required('Se requiere un nombre de Empresa o Razón Social'),
      email: yup.string().email().required('Se requiere un correo electronico'),
      phone: yup.number().positive(),
      mobilePhone: yup.number().positive(),
      inquiry: yup.string().required()
   })

   const { register, handleSubmit, formState: { errors } } = useForm({
      defaultValues: {
         name: '',
         lastName: '',
         company: '',
         email: '',
         phone: 0,
         mobilePhone: 0,
         inquiry: ''
      },
      resolver: yupResolver(schema)
   });

   const onSubmit = (values: any) => { alert(JSON.stringify(values)) }

   const [displayPrivacyAgreement, setDisplayPrivacyAgreement] = useState<boolean>(false)
   const [acceptedPolicy, setAcceptedPolicy] = useState<boolean>(false)

   return (
      <>
         {displayPrivacyAgreement && <PrivacyAgreement showModal={displayPrivacyAgreement} hideModal={setDisplayPrivacyAgreement} />}
         <Row>
            <p style={{ marginTop: '20px', fontFamily: 'Abhaya Libre', fontSize: '1.5rem' }}>
               REGISTRO PARA RECIBIR INFORMACIÓN DE NUESTRAS SESIONES DE ESTUDIO ADUANAL.
            </p>
         </Row>
         <Container className='container-contact'>
            <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
               <Row>
                  <Col md={6}>
                     <input style={{ width: '100%' }} placeholder='Nombre' {...register('name')} />
                     <p>{errors.name?.message}</p>
                  </Col>
                  <Col md={6}>
                     <input className='w-100' placeholder='Apellido(s)' {...register('lastName')} />
                     <p>{errors.lastName?.message}</p>
                  </Col>
               </Row >
               <Row>
                  <Col md={6}>
                     <input className='w-100' placeholder='Empresa o Razón Social' {...register('company')} />
                     <p>{errors.company?.message}</p>
                  </Col>
                  <Col md={6}>
                     <input className='w-100' placeholder='Correo Electronico' {...register('email')} />
                     <p>{errors.email?.message}</p>
                  </Col>
               </Row>
               <Row>
                  <Col md={6}>
                     <input className='w-100' placeholder='Telefono' {...register('phone')} type='number' />
                     <p>{errors.phone?.message}</p>
                  </Col>
                  <Col md={6}>
                     <input className='w-100' placeholder='WhatsApp' {...register('mobilePhone')} type='number' />
                     <p>{errors.mobilePhone?.message}</p>
                  </Col>
               </Row>
               <Row>
                  <Col md={12}>
                     <textarea style={{ resize: 'none' }} rows={5} className='w-100' placeholder='Mensaje' {...register('inquiry')} />
                     <p>{errors.inquiry?.message}</p>
                  </Col>
               </Row>
               <br />
               <Row>
                  <Col md={3}>
                     <Button className='btn btn-link' onClick={() => setDisplayPrivacyAgreement(!displayPrivacyAgreement)}>Politica de Privacidad</Button>
                  </Col>
               </Row>
               <Row>
                  <Col md={12}>
                     <Button disabled={!acceptedPolicy} type='submit'>Enviar</Button>
                  </Col>
               </Row>
               <Row>
                  <Col md={4}>
                     <input type='checkbox' onClick={() => setAcceptedPolicy(!acceptedPolicy)} value='Acepto la poltica de privacidad' />Acepto la poltica de privacidad
                  </Col>
               </Row>
            </form>
         </Container>
      </>
   )
}