import { yupResolver } from '@hookform/resolvers/yup';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import './ContactForm.css';

export const ContactForm = () => {
   const schema = yup.object({
      name: yup.string().required('Se requiere un nombre'),
      email: yup.string().email().required('Se requiere un correo electronico'),
      phone: yup.number().positive()
   })

   const { register, handleSubmit, formState: { errors } } = useForm({
      defaultValues: {
         name: '',
         email: '',
         phone: 0
      },
      resolver: yupResolver(schema)
   });

   const onSubmit = (values: any) => { alert(JSON.stringify(values)) }

   return (
      <>
         <p style={{ marginTop: '40px', fontFamily: 'Abhaya Libre', fontSize: '1.5rem' }}>
            REGISTRO PARA RECIBIR INFORMACIÓN DE NUESTRAS SESIONES DE ESTUDIO ADUANAL.
         </p>
         <Container fluid className='container-contact'>
            <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
               <input placeholder='Nombre' {...register('name')} />
               <p>{errors.name?.message}</p>
               <input placeholder='Correo Electronico' {...register('email')} />
               <p>{errors.email?.message}</p>
               <input placeholder='Telefono' {...register('phone')} type='number' />
               <br />
               <button type='submit'>Enviar</button>
            </form>
         </Container>
      </>
   )
}