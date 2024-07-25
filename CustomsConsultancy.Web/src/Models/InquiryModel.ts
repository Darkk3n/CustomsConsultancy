export interface InquiryModel {
	inquiryId: number;
	name: string;
	lastName: string;
	company: string;
	email: string;
	phone: string;
	mobilePhone: string;
	inquiry: string;
	answered: boolean;
	answer: string;
}

export interface InquiryResponseModel {
	inquiryId: number;
	response: string;
}
