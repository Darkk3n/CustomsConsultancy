import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Controller, useForm } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import './SessionsRegisterForm.css';

interface FormData {
   name: string;
   email: string;
   phone: string;
   clientType: string;
   topicsOfInterest: string;
}
export const SessionsRegisterForm = () => {
   const { register, control, handleSubmit } = useForm<FormData>();

   const onSubmit = (data: FormData) => {
      console.log(data)
   }
   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <Container>
            <Row>
               <Col md={6}>
                  <input required className='w-100 mt-1 mb-1' placeholder='Nombre' {...register('name')} />
               </Col>
               <Col md={6}>
                  <input required className='w-100 mt-1 mb-1' placeholder='Correo Electrónico' {...register('email')} />
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
               </Col>
               <Col md={6}>
                  <Form.Select placeholder="Tipo de Client" className='w-100 mt-1 mb-1' {...register('clientType')} onChange={(e) => { console.log(e.target.value) }}>
                     <option>-- SELECCIONE --</option>
                     <option>Test 1</option>
                     <option>Test 2</option>
                     <option>Test 3</option>
                  </Form.Select>
               </Col>
            </Row>
            <Row>
               <Col md={12}>
                  <textarea style={{ resize: 'none' }} rows={5} className='w-100 mt-1 mb-1' placeholder='Mensaje' {...register('topicsOfInterest')} />
               </Col>
            </Row>
         </Container>
      </form>
   )
}
