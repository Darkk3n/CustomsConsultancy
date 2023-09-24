import { Container } from "react-bootstrap"
import './SessionsTitle.css'

export const SessionsTitle = () => {
   return (
      <Container className="sessions-background">
         <Container className="d-flex justify-content-center align-items-center title">
            <p className="title">
               Sesiones de Estudio Aduanal
            </p>
         </Container>
      </Container>
   )
}
