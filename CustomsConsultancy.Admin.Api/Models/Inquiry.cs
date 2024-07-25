namespace CustomsConsultancy.Admin.Api.Models
{
    public class Inquiry : BaseEntity
    {
        public string ClientName { get; set; }
        public string ClientLastName { get; set; }
        public string Company { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string MobilePhone { get; set; }
        public string Question { get; set; }
        public bool Answered { get; set; }
        public string Answer { get; set; }
    }
}