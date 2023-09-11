import { ServiceConsultancy, ServiceCustomsAgency, ServiceInstruction, ServiceLegalDefense, ServicesIcons } from "."


export const Services = () => {
   return (
      <>
         <ServicesIcons />
         <ServiceInstruction />
         <ServiceConsultancy />
         <ServiceLegalDefense />
         <ServiceCustomsAgency />
      </>
   )
}