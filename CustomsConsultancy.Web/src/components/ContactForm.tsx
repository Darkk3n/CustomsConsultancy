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
   // const schema = yup.object({
   //    name: yup.string().required('Se requiere un nombre'),
   //    lastName: yup.string().required('Se requiere por lo menos un apellido'),
   //    company: yup.string().required('Se requiere un nombre de Empresa o Razón Social'),
   //    email: yup.string().email().required('Se requiere un correo electronico'),
   //    phone: yup.string(),
   //    mobilePhone: yup.string(),
   //    inquiry: yup.string().required()
   // })

   const { register, handleSubmit, control } = useForm<FormInput>(

      // resolver: yupResolver(schema)
   );

   const onSubmit = (values: FormInput) => { console.log(values) }

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
                     <input className='w-100 mt-1 mb-1' placeholder='Nombre' {...register('name')} />
                     {/* <p>{errors.name?.message}</p> */}
                  </Col>
                  <Col md={6}>
                     <input className='w-100 mt-1 mb-1' placeholder='Apellido(s)' {...register('lastName')} />
                     {/* <p>{errors.lastName?.message}</p> */}
                  </Col>
               </Row >
               <Row>
                  <Col md={6}>
                     <input className='w-100 mt-1 mb-1' placeholder='Empresa o Razón Social' {...register('company')} />
                     {/* <p>{errors.company?.message}</p> */}
                  </Col>
                  <Col md={6}>
                     <input className='w-100 mt-1 mb-1' placeholder='Correo Electronico' {...register('email')} />
                     {/* <p>{errors.email?.message}</p> */}
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
                     {/* <p>{errors.mobilePhone?.message}</p> */}
                  </Col>
               </Row>
               <Row>
                  <Col md={12}>
                     <textarea style={{ resize: 'none' }} rows={5} className='w-100 mt-1 mb-1' placeholder='Mensaje' {...register('inquiry')} />
                     {/* <p>{errors.inquiry?.message}</p> */}
                  </Col>
               </Row>
               <br />
               <Row>
                  <Col md={3}>
                     <Button className='btn btn-link p-0 ' onClick={() => setDisplayPrivacyAgreement(!displayPrivacyAgreement)}>Politica de Privacidad</Button>
                  </Col>
               </Row>
               <Row>
                  <Col md={4}>
                     <input className='p-0' type='checkbox' onClick={() => setAcceptedPolicy(!acceptedPolicy)} value='Acepto la poltica de privacidad' />Acepto la poltica de privacidad
                  </Col>
               </Row>
               <Row>
                  <Col md={12}>
                     <Button disabled={!acceptedPolicy} type='submit'>Enviar</Button>
                  </Col>
               </Row>
            </form>
         </Container >
      </>
   )
}