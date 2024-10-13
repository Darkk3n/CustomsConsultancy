namespace CustomsConsultancy.Admin.Api.Dtos
{
    public record CourseRegistrationDto
    {
        public int CourseId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public int? ClientId { get; set; }
        public bool RequiresInvoice { get; set; }
        public string Rfc { get; set; }
        public string PersonOrCompanyName { get; set; }
        public string PostalCode { get; set; }
        public int? TaxRegime { get; set; }
        public string TaxPayerEmail { get; set; }
        public string PaymentMethod { get; set; }
    }
}