export interface CourseData {
	id: number;
	title: string;
	price: number;
	duration: string;
	objective: string;
	image: string;
}

export interface CourseModel {
	id: number | undefined;
	title: string;
	price: number;
	duration: string;
	fileName: string;
	status: string;
	videoId: string
}
