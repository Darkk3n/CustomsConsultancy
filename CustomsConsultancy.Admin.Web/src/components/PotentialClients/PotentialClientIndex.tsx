import { useEffect, useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import { PotentialClientsList } from ".";
import http from "../../api/adminAgent";
import { PotentialClientModel } from "../../models";

export const PotentialClientIndex = () => {
	const [potentialClients, setPotentialClients] = useState<PotentialClientModel[]>([])
	const [potentialClientsContacted, setPotentialClientsContacted] = useState<PotentialClientModel[]>([])

	useEffect(() => {
		http.PotentialClients.getAll()
			.then((d: PotentialClientModel[]) => {
				setPotentialClients(d.filter(r => !r.contacted))
				setPotentialClientsContacted(d.filter(r => r.contacted))
			});
	}, [])

	return (
		<Container>
			<Tabs>
				<Tab title="No Contactados" eventKey='noContacted'>
					<PotentialClientsList clientList={potentialClients} isContacted={false} />
				</Tab>
				<Tab title="Contactados" eventKey='contacted'>
					<PotentialClientsList clientList={potentialClientsContacted} isContacted={true} />
				</Tab>
			</Tabs>
		</Container>
	)
}
