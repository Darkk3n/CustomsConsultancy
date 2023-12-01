import { useEffect, useState } from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import { InquiryModel } from '../../../../CustomsConsultancy.Web/src/Models/InquiryModel';
import http from '../../api/agent';
import { InquiryList } from './InquiryList';

export const InquiriesIndex = () => {
	const [unansweredInquiries, setUnansweredInquiries] = useState<InquiryModel[]>([])
	const [answeredInquiries, setAnsweredInquiries] = useState<InquiryModel[]>([])

	useEffect(() => {
		http.Inquiries.getAll()
			.then(i => {
				setAnsweredInquiries(i.filter(r => r.answered))
				setUnansweredInquiries(i.filter(r => !r.answered))
			})
	}, [])

	return (
		<>
			<Container>
				<Tabs>
					<Tab title='Pendientes de Respuesta' eventKey='Unanswered'>
						<InquiryList inquiries={unansweredInquiries} />
					</Tab>
					<Tab title='Respondidas' eventKey='Answered'>
						<InquiryList inquiries={answeredInquiries} />
					</Tab>
				</Tabs>
			</Container>
		</>
	)
}
