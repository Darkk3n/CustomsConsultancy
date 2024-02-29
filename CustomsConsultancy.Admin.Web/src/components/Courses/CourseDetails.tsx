import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../api/adminAgent";
import { CourseModel } from '../../models/Courses/CourseIndexModel';

export const CourseDetails = () => {
	const { courseId } = useParams();
	const numCourseId = useMemo(() => Number(courseId), [courseId]);
	const [course, setCourse] = useState<CourseModel>()

	useEffect(() => {
		http.Courses
			.getById(numCourseId)
			.then(r => setCourse(r))
	}, [numCourseId])



	return (
		<div>Course Details: {course?.title}</div>
	)
}
