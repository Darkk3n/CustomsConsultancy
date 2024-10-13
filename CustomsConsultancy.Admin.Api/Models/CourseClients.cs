namespace CustomsConsultancy.Admin.Api.Models
{
    public class CourseClients
    {
        public int CourseId { get; set; }
        public int ClientId { get; set; }

        public bool RequiresInvoice { get; set; }

        //If requires invoice is true, then the following fields are required
        public string Rfc { get; set; }
        public string PersonOrCompanyName { get; set; }
        public string PostalCode { get; set; }
        public int? TaxRegime { get; set; }
        public string TaxPayerEmail { get; set; }

        public int PaymentMethod { get; set; }
    }
}