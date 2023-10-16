import { Container } from "react-bootstrap"
import { SessionsInfo, SessionsRegister, SessionsTitle } from "."
import { SessionsUpcoming } from "./SessionsUpcoming"

export const Sessions = () => {
   return (
      <Container>
         <SessionsTitle />
         <SessionsInfo />
         <SessionsRegister />
         <SessionsUpcoming />
      </Container>
   )
}
