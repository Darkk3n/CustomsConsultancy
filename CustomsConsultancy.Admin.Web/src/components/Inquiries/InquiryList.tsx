import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { InquiryModel } from '../../../../CustomsConsultancy.Web/src/Models/InquiryModel'

interface IInquiryListProps {
	inquiries: InquiryModel[]
}

export const InquiryList = ({ inquiries }: IInquiryListProps) => {
	return (
		<Table bordered responsive="md">
			<thead>
				<tr>
					<th>#</th>
					<th>Nombre</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{
					inquiries.map((r: InquiryModel, index) => {
						return (<tr key={index}>
							<td>{r.inquiryId}</td>
							<td>{`${r.name} ${r.lastName}`}</td>
							<td>
								<Link to={`/inquiry/${r.inquiryId}`}>Ver detalles</Link>
							</td>
						</tr>)
					})
				}
			</tbody>
		</Table>
	)
}
