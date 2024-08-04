import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import { CourseModel } from '../../../../CustomsConsultancy.Admin.Web/src/models/Courses/CourseIndexModel';
import http from "../../api/agent";
import './Courses.css';

export const Courses = () => {
	const baseImg = 'src/assets/img/'

	const navigate = useNavigate();

	const [courses, setCourses] = useState<CourseModel[]>([])

	useEffect(() => {
		http.Courses.list()
			.then(r => setCourses(r))
	}, [])


	const openCourse = (index: number) => {
		navigate(`/courses/${index}`)
	}

	return (
		<div className="d-flex justify-content-center">
			{courses.map((course, index) => (
				<button onClick={() => openCourse(course.id!)} key={index}>
					<img alt="sample_file" src={`${baseImg}${course.fileName}`} />
				</button>
			))}
		</div>
	)
}
