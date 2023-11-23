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

        public static CourseDto FromModel(Course course)
        {
            return new CourseDto
            {
                Title = course.Title,
                Duration = course.Duration,
                FileName = course.FileName,
                Status = course.Status,
                Price = course.Price
            };
        }

        public static IEnumerable<CourseDto> FromModelList(IEnumerable<Course> courses)
        {
            var toReturn = new List<CourseDto>();
            toReturn.AddRange(courses.Select(r => new CourseDto
            {
                Title = r.Title,
                Duration = r.Duration,
                FileName = r.FileName,
                Price = r.Price,
                Status = r.Status
            }));
            return toReturn;
        }
    }
}