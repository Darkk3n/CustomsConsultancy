import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { InquiryModel } from "../../../CustomsConsultancy.Web/src/Models/InquiryModel"
import http from "../api/adminAgent"
import './Home.css'

export const Home = () => {
	const [recordCount, setRecordCount] = useState<number>(0)

	useEffect(() => {
		http.Inquiries.getAll()
			.then((i: InquiryModel[]) => {
				setRecordCount(i.filter(r => !r.answered).length)
			})
	}, [])


	return (
		<>
			{recordCount > 0 ?
				<>
					<div className="my-display">Existen {recordCount} preguntas sin responder.
					</div>
					<Link className="my-display" to='/inquiries'>Ir a Preguntas</Link>
				</>
				:
				<div className="my-display">No hay preguntas pendientes de responder</div>
			}
		</>
	)
}
