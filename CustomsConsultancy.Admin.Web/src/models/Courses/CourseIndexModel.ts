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
	isActive: boolean;
	videoId: string
}


export interface CourseCreateModel {
	title: string;
	price: number;
	duration: string;
	fileName: string;
	isActive: boolean;
	videoId: string
}
