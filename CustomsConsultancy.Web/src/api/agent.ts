import axios, { AxiosResponse } from "axios";
import { InquiryModel } from "../Models/InquiryModel";
import { PotentialClientModel } from '../Models/PotentialClientModel';

axios.defaults.baseURL = 'https://localhost:7108/api'

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: object) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: object) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string, body: object) => axios.delete<T>(url, body).then(responseBody),
}

const Inquiries = {
    create: (inquiry: InquiryModel) => requests.post<void>('/inquiries', inquiry),
}

// const Courses = {
//     create: (course: CourseData) => requests.post<void>('/courses', course),
//     update: (course: CourseData) => requests.put<CourseData>(`/courses/${course.id}`, course),
//     delete: (courseId: number) => requests.del<void>(`/courses/${courseId}`, {}),
//     list: () => requests.get<CourseData[]>('/courses'),
//     getById: (courseId: number) => requests.get<CourseData>(`/course/${courseId}`)
// }

const PotentialClients = {
    create: (data: PotentialClientModel) => requests.post<void>('/PotentialClient', data)
}

const http = {
    Inquiries,
    PotentialClients
}


export default http;
