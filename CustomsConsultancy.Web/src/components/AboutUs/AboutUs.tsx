import { Col, Container, Row } from 'react-bootstrap'
import './AboutUs.css'

export const AboutUs = () => {
   return (
      <Container fluid>
         <Container className='who-are-we' fluid>
            <Row>
               <Col md={7}>
                  <h1>¿Quiénes Somos?</h1>
               </Col>
               <Col md={5}></Col>
            </Row>
            <Row>
               <Col md={8}>
                  <p className='pt-3 text-start' style={{ fontSize: '2rem' }}>
                     La plataforma I.C. ADUANAL pone a tu alcance un grupo de profesionales con más de 20 años de experiencia en el ramo aduanal para tu COMPLIANCE ADUANERO.
                  </p>
               </Col>
               <Col md={4}></Col>
            </Row>
         </Container>
         <Container className='mission' fluid>
            <Row>
               <Col md={8}>
               </Col>
               <Col md={4}>
                  <Container className='d-flex justify-content-center'>
                     <h1>Misión:</h1>
                  </Container>
               </Col>
            </Row>
            <Row>
               <Col md={3}></Col>
               <Col md={9}>
                  <p className='pt-3' style={{ fontSize: '1.5rem' }}>
                     En Instrucción y Consultoría Aduanal, nuestra misión es proporcionar soluciones integrales de alto nivel en el ámbito aduanal, garantizando el cumplimiento de la normatividad y regulaciones vigentes. A través de la experiencia de nuestro equipo de profesionales altamente capacitados, brindamos servicios de asesoría jurídica, capacitación y despacho aduanero, para asegurar la excelencia en el COMPLIANCE ADUANERO de nuestros clientes y contribuir al crecimiento sostenible de sus operaciones comerciales.
                  </p>
               </Col>
            </Row>
         </Container>
         <Container className='vision' fluid>
            <Row>
               <Col md={4}>
                  <Container className='d-flex justify-content-center'>
                     <h1>Visión:</h1>
                  </Container>
               </Col>
            </Row>
            <Row>
               <Col md={8}>
                  <p className='pt-2' style={{ fontSize: '1.5rem', textAlign: 'left' }}>
                     Nuestra visión es posicionarnos como la principal plataforma de referencia en el campo de la consultoría aduanal, reconocida por la calidad y eficiencia de nuestros servicios. Aspiramos a ser líderes en el ramo del Comercio Exterior, destacando por nuestra constante innovación, la sólida formación de nuestro equipo de expertos y la confianza que nuestros clientes depositan en nosotros. Buscamos ser un catalizador del éxito empresarial de nuestros clientes, impulsando el crecimiento y la competitividad en el ámbito del comercio internacional.
                  </p>
               </Col>
            </Row>
         </Container>
         <Container className='values' fluid>
            <Row>
               <Col md={5}>
               </Col>
               <Col md={7}>
                  <h1>Valores</h1>
                  <Container style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                     <ol type='1' >
                        <li>Profesionalismo: Nos regimos por altos estándares de ética y responsabilidad, brindando servicios con un enfoque riguroso y profesional para garantizar la satisfacción de nuestros clientes.</li>
                        <li>Conocimiento: Valoramos el aprendizaje continuo y la actualización constante de nuestros conocimientos para ofrecer soluciones de vanguardia y estar siempre al tanto de las novedades en el ámbito aduanal.</li>
                        <li>Confianza: Establecemos relaciones sólidas y duraderas con nuestros clientes, basadas en la confianza mutua y en el cumplimiento de nuestros compromisos.</li>
                        <li>Excelencia: Nos esforzamos por alcanzar la excelencia en cada uno de nuestros servicios, buscando superar las expectativas de nuestros clientes y alcanzar los más altos niveles de calidad.</li>
                        <li>Colaboración: Fomentamos el trabajo en equipo y la colaboración entre nuestros profesionales, clientes y socios, reconociendo que juntos podemos lograr resultados excepcionales.</li>
                        <li>Orientación al cliente: Ponemos a nuestros clientes en el centro de nuestras acciones, adaptando nuestros servicios a sus necesidades específicas y brindando soluciones personalizadas y efectivas.</li>
                        <li>Innovación: Nos destacamos por la creatividad y la búsqueda de nuevas formas de abordar los desafíos aduaneros, aplicando tecnologías y métodos innovadores para optimizar nuestros servicios.</li>
                     </ol>
                  </Container>
               </Col>
            </Row>
         </Container>
         <Container className='policy' fluid>
            <Row>
               <Col md={6}>
                  <h1>Política</h1>
               </Col>
               <Col md={6}></Col>
            </Row>
            <Row>
               <Col md={6}>
                  <p style={{ fontSize: '2rem' }}>
                     Nuestra política se centra en el compromiso de brindar servicios de consultoría aduanal de primera clase, basados en el conocimiento técnico y la experiencia de nuestro equipo. Nos comprometemos a:
                  </p>
                  <ul>
                     <li>Cumplir con todas las normativas y regulaciones aduaneras vigentes, garantizando la integridad de nuestras operaciones y las de nuestros clientes.</li>
                     <li>Proporcionar un trato ético y respetuoso a nuestros clientes, asegurando la confidencialidad y privacidad de la información que compartan con nosotros.</li>
                     <li>Mantenernos actualizados en los cambios en las normativas aduaneras y en las mejores prácticas del sector, para ofrecer soluciones de vanguardia y eficientes.</li>
                     <li>Promover la capacitación y el desarrollo profesional de nuestro equipo, para asegurar la excelencia en la prestación de nuestros servicios.</li>
                     <li>Establecer relaciones de confianza y colaboración con nuestros clientes y socios, buscando siempre su satisfacción y el éxito de sus operaciones aduaneras.</li>
                  </ul>
               </Col>
               <Col md={6}></Col>
            </Row>
         </Container>
         <Container className='about-us-footer' fluid>
            <Row>
               <Col md={8}>
                  <p style={{ fontSize: '1.5rem' }}>
                     Con nuestra sólida misión, visión, valores y política, en Instrucción y Consultoría Aduanal estamos comprometidos a ser el apoyo estratégico y confiable para nuestros clientes, asegurando el cumplimiento aduanero, proporcionándote el apoyo necesario para alcanzar el éxito y la excelencia en tus operaciones aduanales.
                  </p>
               </Col>
               <Col md={4}></Col>
            </Row>
         </Container>
      </Container>
   )
}