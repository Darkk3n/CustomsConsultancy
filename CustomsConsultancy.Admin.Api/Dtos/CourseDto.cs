using CustomsConsultancy.Admin.Api.Models;

namespace CustomsConsultancy.Admin.Api.Dtos
{
    public record CourseDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public decimal Price { get; set; }
        public string Duration { get; set; }
        public string FileName { get; set; }
        public bool? IsActive { get; set; }
        public string VideoId { get; set; }
    }

    public record CourseCreateDto
    {
        public string Title { get; set; }
        public decimal Price { get; set; }
        public string Duration { get; set; }
        public string FileName { get; set; }
        public bool? IsActive { get; set; }
        public string VideoId { get; set; }
    }
}