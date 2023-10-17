import { Carousel } from 'react-bootstrap'
import './Courses.css'

export const Courses = () => {


   return (
      // <Carousel>
      //    <Carousel.Item>
      //       //Image here
      //       <Carousel.Caption>
      //          <h3>Curso 1</h3>
      //       </Carousel.Caption>
      //    </Carousel.Item>

      //    <Carousel.Item>
      //       //Image here
      //       <Carousel.Caption>
      //          <h3>Curso 2</h3>
      //       </Carousel.Caption>
      //    </Carousel.Item>
      // </Carousel>
      <Carousel>
         <Carousel.Item>
            <img
               className="d-block w-100"
               src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
               alt="Image One"
            />
            <Carousel.Caption>
               <h3>Label for first slide</h3>
               <p>Sample Text for Image One</p>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <img
               className="d-block w-100"
               src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
               alt="Image Two"
            />
            <Carousel.Caption>
               <h3>Label for second slide</h3>
               <p>Sample Text for Image Two</p>
            </Carousel.Caption>
         </Carousel.Item>
      </Carousel>
   )
}
