import { SessionsRegisterForm } from '.'
import './SessionsRegister.css'

export const SessionsRegister = () => {
   return (
      <div style={{ color: 'black' }} className="sessions-register-background d-flex align-items-start justify-content-center flex-column">
         <div style={{ width: '50%', textAlign: 'justify' }}>
            <h1>REGISTRATE</h1>
            <p className='font-size'>
               ¡Prepárate para el éxito! Regístrate ahora y sé el primero en conocer nuestros próximos eventos de capacitación.
            </p>
            <p className='font-size'>
               REGISTRO PARA RECIBIR INFORMACIÓN DE NUESTRAS SESIONES DE ESTUDIO ADUANAL.
            </p>
         </div>
         <SessionsRegisterForm />
      </div>
   )
}
