using CustomsConsultancy.Admin.Api.Dtos;

namespace CustomsConsultancy.Admin.Api.Models
{
    public class Course : BaseEntity
    {
        public string Title { get; set; }
        public decimal Price { get; set; }
        public string Duration { get; set; }
        public string FileName { get; set; }
        public bool? Status { get; set; }
        public string VideoId { get; set; }
        public DateTime? DateDue { get; set; }
        public List<Client> Clients { get; } = [];
    }
}