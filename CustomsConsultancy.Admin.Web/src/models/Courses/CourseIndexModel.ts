
export interface CourseIndexModel {
	id: number;
	title: string;
	duration: string;
	isActive: boolean;
}

export interface CourseModel {
	id: number | undefined;
	title: string;
	price: number;
	duration: string;
	fileName: string;
	isActive: boolean;
	videoId: string;
	dateDue: string
}


export interface CourseCreateModel {
	title: string;
	price: number;
	duration: string;
	fileName: string;
	isActive: boolean;
	videoId: string
	dateDue: string;
}
