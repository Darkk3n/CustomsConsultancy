import './SessionsInfo.css'

export const SessionsInfo = () => {
   return (
      <div className="sessions-info-background d-flex align-items-start justify-content-center flex-column">
         <div style={{ width: '60%', textAlign: 'justify' }} className="d-flex">
            <p>
               En I.C. Aduanal estamos conscientes de la importancia y necesidad de contar con espacios donde se ponga a disposición de la generalidad SESIONES DE CAPACITACIÓN donde se aborde el estudio de los diversos temas que integran el Despacho Aduanero de Mercancías.
            </p>
         </div>
         <div style={{ width: '60%', textAlign: 'justify' }} className='d-flex'>
            <p>
               En nuestra SESIONES DE ESTUDIO ADUANAL abordaremos en forma clara y sencilla el estudio de las diferentes figuras jurídicas que se integran en la Ley Aduanera y demás ordenamientos aplicables y que regulan la entrada y salida de mercancías de nuestro país, Mexico.
            </p>
         </div>
         <div style={{ width: '60%', textAlign: 'justify' }} className='d-flex'>
            <p>
               Los temas que se abordaran en las SESIONES DE ESTUDIO ADUANAL son, por ejemplo:
            </p>
         </div>
         <ul style={{ textAlign: 'justify' }}>
            <li>INTRODUCCIÓN AL DERECHO ADUANERO</li>
            <li>DEPOSITO ANTE LA ADUANA Y ABANDONO DE MERCANCIAS</li>
            <li>CONTRIBUCIONES E IMPUESTOS AL COMERCIO EXTERIOR</li>
            <li>REGIMENES ADUANEROS</li>
            <li>PEDIMENTO ADUANAL Y DOCUMENTOS ADUANEROS</li>
            <li>PROCEDIMIENTO ADMINISTRATIVO EN MATERIA ADUANERA</li>
         </ul>
      </div>
   )
}
