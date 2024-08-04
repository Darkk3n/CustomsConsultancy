import axios, { AxiosResponse } from "axios";
import { InquiryModel, InquiryResponseModel } from "../../../CustomsConsultancy.Web/src/Models/InquiryModel";
import { PotentialClientModel } from "../models";
import { CourseCreateModel, CourseIndexModel, CourseModel } from "../models/Courses/CourseIndexModel";
import { PotentialClientForm } from "../models/PotentialClients/PotentialClientModel";

axios.defaults.baseURL = "https://localhost:7108/api";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
	get: <T>(url: string) => axios.get<T>(url).then(responseBody),
	post: <T>(url: string, body: object) => axios.post<T>(url, body).then(responseBody),
	put: <T>(url: string, body: object) => axios.put<T>(url, body).then(responseBody),
	del: <T>(url: string, body: object) => axios.delete<T>(url, body).then(responseBody),
};

const Courses = {
	create: (course: CourseCreateModel) => requests.post<void>("/courses", course),
	update: (course: CourseModel) => requests.put<CourseModel>(`/courses/${course.id}`, course),
	delete: (courseId: number) => requests.del<void>(`/courses/${courseId}`, {}),
	list: () => requests.get<CourseIndexModel[]>("/courses"),
	getById: (courseId: number) => requests.get<CourseModel>(`/courses/${courseId}`),
};

const Inquiries = {
	getAll: () => requests.get<InquiryModel[]>("/inquiries"),
	getById: (inquiryId: number) => requests.get<InquiryModel>(`/inquiries/${inquiryId}`),
	answer: (inquiryResponse: InquiryResponseModel) => requests.post<InquiryModel>(`/inquiries/answer/${inquiryResponse.inquiryId}`, inquiryResponse),
};

const PotentialClients = {
	getAll: () => requests.get<PotentialClientModel[]>("/potentialclient"),
	contact: (data: PotentialClientForm) => requests.post<PotentialClientModel[]>("/potentialclient/answer", data),
};

const http = {
	Courses,
	Inquiries,
	PotentialClients,
};

export default http;
