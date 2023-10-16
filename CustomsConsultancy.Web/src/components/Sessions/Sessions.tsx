import { Container } from "react-bootstrap"
import { SessionsInfo, SessionsTitle } from "."

export const Sessions = () => {
   return (
      <Container>
         <SessionsTitle />
         <SessionsInfo />
      </Container>
   )
}
