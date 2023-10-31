import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Courses.css';

export const Courses = () => {
   const baseImg = 'src/assets/img/'

   const images = [
      "Course1.jpg",
      "Course2.jpg",
      "Course3.jpg",
      "Course4.jpg",
   ];

   return (
      <Carousel useKeyboardArrows={true}>
         {images.map((image, index) => (
            <div className="slide" key={index} >
               <img alt="sample_file" src={`${baseImg}${image}`} />
            </div>
         ))}
      </Carousel>
   )
}
