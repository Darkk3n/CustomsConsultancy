import axios, { AxiosResponse } from "axios";
import { CourseModel } from "../Models";
import { InquiryModel } from "../Models/InquiryModel";
import { PotentialClientModel } from "../Models/PotentialClientModel";

axios.defaults.baseURL = "https://localhost:7108/api";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
	get: <T>(url: string) => axios.get<T>(url).then(responseBody),
	post: <T>(url: string, body: object) => axios.post<T>(url, body).then(responseBody),
	put: <T>(url: string, body: object) => axios.put<T>(url, body).then(responseBody),
	del: <T>(url: string, body: object) => axios.delete<T>(url, body).then(responseBody),
};

const Inquiries = {
	create: (inquiry: InquiryModel) => requests.post<void>("/inquiries", inquiry),
};

const PotentialClients = {
	create: (data: PotentialClientModel) => requests.post<void>("/PotentialClient", data),
};

const Courses = {
	list: () => requests.get<CourseModel[]>("/courses"),
	getById: (courseId: number) => requests.get<CourseModel>(`/courses/${courseId}`)
}

const http = {
	Inquiries,
	PotentialClients,
	Courses
};

export default http;
