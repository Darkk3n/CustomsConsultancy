import { Container } from "react-bootstrap"
import { SessionsInfo, SessionsRegister, SessionsTitle } from "."
import { Courses } from "./Courses"
import { SessionsUpcoming } from "./SessionsUpcoming"

export const Sessions = () => {
   return (
      <Container>
         <SessionsTitle />
         <SessionsInfo />
         <SessionsRegister />
         <SessionsUpcoming />
         <Courses />
      </Container>
   )
}
