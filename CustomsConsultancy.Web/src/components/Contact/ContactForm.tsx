import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';
import { PrivacyAgreement } from '.';
import './ContactForm.css';

interface FormInput {
   name: string;
   lastName: string;
   company: string;
   email: string;
   phone: string;
   mobilePhone: string;
   inquiry: string;
}
export const ContactForm = () => {


   const { register, handleSubmit, control } = useForm<FormInput>();

   const onSubmit = (values: FormInput) => { console.log(values) }

   const [displayPrivacyAgreement, setDisplayPrivacyAgreement] = useState<boolean>(false)
   const [acceptedPolicy, setAcceptedPolicy] = useState<boolean>(false)

   return (
      <>
         {displayPrivacyAgreement && <PrivacyAgreement showModal={displayPrivacyAgreement} hideModal={setDisplayPrivacyAgreement} />}
         <Row>
            <p style={{ marginTop: '20px', fontFamily: 'Bebas Neue', fontSize: '3rem' }}>
               ¿Necesitas asesorías? Ponte en contacto
            </p>
         </Row>
         <Container className='container-contact'>
            <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
               <Row>
                  <Col md={6}>
                     <input required className='w-100 mt-1 mb-1' placeholder='Nombre' {...register('name')} />
                     {/* <p>{errors.name?.message}</p> */}
                  </Col>
                  <Col md={6}>
                     <input required className='w-100 mt-1 mb-1' placeholder='Apellido(s)' {...register('lastName')} />
                  </Col>
               </Row >
               <Row>
                  <Col md={6}>
                     <input required className='w-100 mt-1 mb-1' placeholder='Empresa o Razón Social' {...register('company')} />
                  </Col>
                  <Col md={6}>
                     <input className='w-100 mt-1 mb-1' placeholder='Correo Electronico' {...register('email')} />
                  </Col>
               </Row>
               <Row>
                  <Col md={6}>
                     <Controller
                        render={({ field: { onChange, name, value } }) => (
                           <PatternFormat
                              className='w-100 mt-1 mb-1'
                              type='tel'
                              format={'###-###-####'}
                              placeholder='Telefono'
                              mask='_'
                              onChange={onChange}
                              name={name}
                              value={value} />
                        )}
                        name={'phone'}
                        control={control}
                     />
                     {/* <p>{errors.phone?.message}</p> */}
                  </Col>
                  <Col md={6}>
                     <Controller
                        render={({ field: { onChange, name, value } }) => (
                           <PatternFormat
                              className='w-100 mt-1 mb-1'
                              type='tel'
                              format={'###-###-####'}
                              placeholder='WhatsApp'
                              mask='_'
                              onChange={onChange}
                              name={name}
                              value={value} />
                        )}
                        name={'mobilePhone'}
                        control={control} />
                  </Col>
               </Row>
               <Row>
                  <Col md={12}>
                     <textarea style={{ resize: 'none' }} rows={5} className='w-100 mt-1 mb-1' placeholder='Mensaje' {...register('inquiry')} />
                  </Col>
               </Row>
               <br />
               <Row>
                  <Col md={3}>
                     <Button style={{ fontSize: '1.5rem' }} variant='link' onClick={() => setDisplayPrivacyAgreement(!displayPrivacyAgreement)}>Politica de Privacidad</Button>
                  </Col>
               </Row>
               <Row>
                  <Col md={4}>
                     <input className='p-0' type='checkbox' onClick={() => setAcceptedPolicy(!acceptedPolicy)} value='Acepto la poltica de privacidad' />Acepto la poltica de privacidad
                  </Col>
               </Row>
               <Row>
                  <Col md={12}>
                     <Button variant='success' disabled={!acceptedPolicy} type='submit'>Enviar</Button>
                  </Col>
               </Row>
            </form>
         </Container >
      </>
   )
}