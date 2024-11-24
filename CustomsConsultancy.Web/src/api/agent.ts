import axios, { AxiosResponse } from "axios";
import { CourseModel, CourseSubscriptionModel } from "../Models";
import { InquiryModel } from "../Models/InquiryModel";
import { PotentialClientModel } from "../Models/PotentialClientModel";

axios.defaults.baseURL = "https://localhost:7108/api";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

axios.interceptors.response.use(
	response => response, // Return the response if everything is fine
	error => {
		const errorMessage =
			error.response?.data?.detail || // `detail` from ProblemDetails response
			error.response?.data?.error || // In case it's a custom error message
			error.message ||
			"An unknown error occurred"; // Generic error message fallback

		// Reject the promise with the extracted error message
		return Promise.reject(errorMessage);
	}
);

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
	getById: (courseId: number) => requests.get<CourseModel>(`/courses/${courseId}`),
};

const CourseRegistration = {
	create: (data: CourseSubscriptionModel) => requests.post<CourseSubscriptionModel>("/courseRegistration", data),
};

const http = {
	Inquiries,
	PotentialClients,
	Courses,
	CourseRegistration,
};

export default http;
