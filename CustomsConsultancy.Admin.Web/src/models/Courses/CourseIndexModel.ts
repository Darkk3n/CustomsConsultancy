export interface CourseIndexModel {
	id: number;
	title: string;
	duration: string;
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


export interface CourseCreateModel {
	title: string;
	price: number;
	duration: string;
	fileName: string;
	status: string;
	videoId: string
}
