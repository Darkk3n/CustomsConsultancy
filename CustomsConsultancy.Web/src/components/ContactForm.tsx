import { yupResolver } from '@hookform/resolvers/yup';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import './ContactForm.css';

export const ContactForm = () => {
   const schema = yup.object({
      name: yup.string().required('Se requiere un nombre'),
      lastName: yup.string().required('Se requiere por lo menos un apellido'),
      company: yup.string().required('Se requiere un nombre de Empresa o Razón Social'),
      email: yup.string().email().required('Se requiere un correo electronico'),
      phone: yup.number().positive(),
      mobilePhone: yup.number().positive()
   })

   const { register, handleSubmit, formState: { errors } } = useForm({
      defaultValues: {
         name: '',
         lastName: '',
         company: '',
         email: '',
         phone: 0,
         mobilePhone: 0
      },
      resolver: yupResolver(schema)
   });

   const onSubmit = (values: any) => { alert(JSON.stringify(values)) }

   return (
      <>
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
                     <input style={{ width: '100%' }} placeholder='Apellido(s)' {...register('lastName')} />
                     <p>{errors.lastName?.message}</p>
                  </Col>
               </Row >
               <Row>
                  <Col md={6}>
                     <input style={{ width: '100%' }} placeholder='Empresa o Razón Social' {...register('company')} />
                     <p>{errors.company?.message}</p>
                  </Col>
                  <Col md={6}>
                     <input style={{ width: '100%' }} placeholder='Correo Electronico' {...register('email')} />
                     <p>{errors.email?.message}</p>
                  </Col>
               </Row>
               <Row>
                  <Col md={6}>
                     <input style={{ width: '100%' }} placeholder='Telefono' {...register('phone')} type='number' />
                     <p>{errors.phone?.message}</p>
                  </Col>
                  <Col md={6}>
                     <input style={{ width: '100%' }} placeholder='WhatsApp' {...register('mobilePhone')} type='number' />
                     <p>{errors.mobilePhone?.message}</p>
                  </Col>
               </Row>
               <br />
               <Row>
                  <Col md={12}>
                     <button type='submit'>Enviar</button>
                  </Col>

               </Row>
            </form>
         </Container>
      </>
   )
}