import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useAcceptPolicy } from '../../hooks/useAcceptPolicy';
import { PhoneInput } from '../Inputs/PhoneInput';
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

   const { acceptPolicyElement } = useAcceptPolicy();

   return (
      <>
         <Row>
            <p style={{ marginTop: '20px', fontFamily: 'Bebas Neue', fontSize: '3rem' }}>
               ¿Necesitas asesorías? Ponte en contacto
            </p>
         </Row>
         <Container className='container-contact'>
            <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
               <Row>
                  <Col md={6}>
                     <input required className='w-100 mt-1 mb-1 p-1' placeholder='Nombre' {...register('name')} />
                     {/* <p>{errors.name?.message}</p> */}
                  </Col>
                  <Col md={6}>
                     <input required className='w-100 mt-1 mb-1 p-1' placeholder='Apellido(s)' {...register('lastName')} />
                  </Col>
               </Row >
               <Row>
                  <Col md={6}>
                     <input required className='w-100 mt-1 mb-1 p-1' placeholder='Empresa o Razón Social' {...register('company')} />
                  </Col>
                  <Col md={6}>
                     <input className='w-100 mt-1 mb-1 p-1' placeholder='Correo Electronico' {...register('email')} />
                  </Col>
               </Row>
               <Row>
                  <Col md={6}>
                     <PhoneInput fieldName="phone" placeholder="Telefono" control={control} />
                     {/* <p>{errors.phone?.message}</p> */}
                  </Col>
                  <Col md={6}>
                     <PhoneInput fieldName="mobilePhone" placeholder="Whatsapp" control={control} />
                  </Col>
               </Row>
               <Row>
                  <Col md={12}>
                     <textarea style={{ resize: 'none' }} rows={5} className='w-100 mt-1 mb-1 p-1' placeholder='Mensaje' {...register('inquiry')} />
                  </Col>
               </Row>
               <br />
               {acceptPolicyElement}
            </form>
         </Container >
      </>
   )
}