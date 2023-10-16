import { Container } from "react-bootstrap"
import { SessionsInfo, SessionsRegister, SessionsTitle } from "."

export const Sessions = () => {
   return (
      <Container>
         <SessionsTitle />
         <SessionsInfo />
         <SessionsRegister />
      </Container>
   )
}
