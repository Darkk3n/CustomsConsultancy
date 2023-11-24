using CustomsConsultancy.Admin.Api.Models;

namespace CustomsConsultancy.Admin.Api.Dtos
{
    public class CourseDto
    {
        public string Title { get; set; }
        public decimal Price { get; set; }
        public string Duration { get; set; }
        public string FileName { get; set; }
        public string Status { get; set; }
    }
}