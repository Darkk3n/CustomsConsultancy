import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import './Courses.css';

export const Courses = () => {
   const baseImg = 'src/assets/img/'

   const images = [
      "Course1.webp",
      "Course2.webp",
      "Course3.webp",
      "Course4.webp",
   ];
   const navigate = useNavigate();

   const openCourse = (index: number) => {
      navigate(`/courses/${index}`)
   }

   return (
      <div>
         {images.map((image, index) => (
            <button onClick={() => openCourse(index)} key={index}>
               <img alt="sample_file" src={`${baseImg}${image}`} />
            </button>
         ))}
      </div>
   )
}