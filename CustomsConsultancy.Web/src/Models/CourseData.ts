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
	videoId: string;
}

export interface CourseSubscriptionModel {
	courseId: number;
	firstName: string;
	lastName: string;
	email: string;
	requiresInvoice: boolean;
	rfc?: string;
	personOrCompanyName?: string;
	postalCode?: string;
	taxRegime?: number;
	taxPayerEmail?: string;
	paymentMethod?: string;
}
