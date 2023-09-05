import { Button, Modal } from "react-bootstrap";

interface Props {
   showModal: boolean;
   hideModal: (value: boolean) => void
}

export const PrivacyAgreement = ({ showModal, hideModal }: Props) => {
   return (
      <Modal show={showModal} onHide={() => hideModal(false)}>
         <Modal.Header style={{ backgroundColor: 'gray' }}>
            <Modal.Title>
               I.C. Aduanal
            </Modal.Title>
         </Modal.Header>
         <Modal.Body style={{ backgroundColor: 'gray' }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit penatibus aptent, eget potenti fusce suspendisse purus montes sociis. Imperdiet fringilla ut libero vulputate leo convallis at sed, dis facilisi tempor sodales facilisis torquent placerat pretium aliquam, nisi nulla etiam felis magnis morbi id. Cubilia volutpat viverra posuere primis laoreet luctus morbi sollicitudin tempor purus litora aptent convallis, facilisi inceptos non tincidunt habitant natoque porta vitae tortor hendrerit sodales.

            At justo dis nec aliquam suspendisse vulputate congue vestibulum, potenti litora class mauris ligula fermentum etiam dignissim, fames porta iaculis augue dapibus ac id. Aptent pellentesque risus quam etiam laoreet mollis nunc tempus accumsan, ligula lobortis interdum quisque taciti nisl nibh suscipit habitant, vitae pharetra nec porttitor ac diam in imperdiet. Sem vivamus vestibulum rhoncus venenatis eget massa, in commodo ligula orci eu elementum, suspendisse egestas aenean malesuada et. Vitae eros curabitur id imperdiet nibh litora fusce, sociosqu a neque nunc natoque tincidunt, fringilla conubia lacinia pulvinar metus orci.

            Justo conubia cubilia vehicula aliquet egestas ornare lacinia imperdiet, lobortis netus sociis tempor semper penatibus venenatis. Lacus eget dui scelerisque id quis gravida sollicitudin neque bibendum ut, etiam laoreet nisl pretium pellentesque sociosqu a cursus nascetur fusce metus, lobortis pulvinar libero nullam class mattis suspendisse curabitur purus. Duis at ridiculus cum viverra id ligula habitasse venenatis tellus, commodo hac tristique vulputate scelerisque himenaeos feugiat velit interdum neque, torquent elementum nec eros blandit taciti sem semper. Duis litora eget tincidunt lectus ac ligula cursus elementum taciti, vestibulum vel dignissim aliquet sed tempus accumsan morbi lacus, non cum habitasse auctor suspendisse nisi varius condimentum.
         </Modal.Body>
         <Modal.Footer style={{ backgroundColor: 'gray' }}>
            <Button variant="primary" onClick={() => hideModal(false)}>Cerrar</Button>
         </Modal.Footer>
      </Modal>
   )
}
