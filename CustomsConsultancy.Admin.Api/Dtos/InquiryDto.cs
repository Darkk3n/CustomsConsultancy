namespace CustomsConsultancy.Admin.Api.Dtos
{
    public class InquiryDto
    {
        public int InquiryId { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Company { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string MobilePhone { get; set; }
        public string Inquiry { get; set; }
        public bool Answered { get; set; }
    }
}