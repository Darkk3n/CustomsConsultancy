import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InquiryModel } from '../../../../CustomsConsultancy.Web/src/Models/InquiryModel';
import http from "../../api/agent";

export const InquiryDetails = () => {
	const { inquiryid } = useParams();
	const inquiryIdParsed = Number(inquiryid);
	const [inquiry, setInquiry] = useState<InquiryModel>();

	useEffect(() => {

		http.Inquiries.getById(inquiryIdParsed)
			.then(i => setInquiry(i))

	}, [inquiryIdParsed])

	return (
		<div>InquiryDetails</div>
	)
}
