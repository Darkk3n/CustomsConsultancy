export interface PotentialClientModel {
	id: number;
	name: string;
	email: string;
	phone: string;
	clientType: string;
	otherClientType: string;
	topicsOfInterest: string;
	contacted: boolean;
	dateContacted: Date;
}

export interface PotentialClientSelectableModel {
	id: number;
	selected: boolean;
	email: string;
}

export interface PotentialClientForm {
	potentialClientIds: string;
	message: string;
}
