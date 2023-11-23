using CustomsConsultancy.Admin.Api.Dtos;

namespace CustomsConsultancy.Admin.Api.Models
{
    public class Course : BaseEntity
    {
        public string Title { get; set; }
        public decimal Price { get; set; }
        public string Duration { get; set; }
        public string FileName { get; set; }
        public string Status { get; set; }
        public string VideoId { get; set; }
        public List<Client> Clients { get; } = new();

        public static Course FromDto(CourseDto dto)
        {
            return new Course
            {
                Title = dto.Title,
                Duration = dto.Duration,
                FileName = dto.FileName,
                Price = dto.Price,
                Status = dto.Status,
            };
        }

        public void UpdateValues(CourseDto dto)
        {
            Title = dto.Title;
            Price = dto.Price;
            Duration = dto.Duration;
            FileName = dto.FileName;
            Status = dto.Status;
        }
    }
}