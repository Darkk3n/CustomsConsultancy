using CustomsConsultancy.Admin.Api.Dtos;
using CustomsConsultancy.Admin.Api.Extensions;
using CustomsConsultancy.Admin.Api.Models;

namespace CustomsConsultancy.Admin.Api.Mappers
{
    public static class CourseMapper
    {
        public static CourseDto FromModel(Course course) => new()
        {
            Id = course.Id,
            Title = course.Title,
            Duration = course.Duration,
            FileName = course.FileName,
            Status = course.Status,
            Price = course.Price,
            VideoId = course.VideoId
        };

        public static IEnumerable<CourseDto> FromModelList(IEnumerable<Course> courses)
        {
            var toReturn = new List<CourseDto>();
            toReturn.AddRange(courses.Select(r => new CourseDto
            {
                Id = r.Id,
                Title = r.Title,
                Duration = r.Duration,
                FileName = r.FileName,
                Price = r.Price,
                Status = r.Status,
                VideoId = r.VideoId
            }));
            return toReturn;
        }

        public static Course FromDto(CourseCreateDto dto) => new()
        {
            Title = dto.Title,
            Duration = dto.Duration,
            FileName = dto.FileName,
            Price = dto.Price,
            Status = dto.Status,
            VideoId = dto.VideoId
        };

        public static void UpdateValues(this Course course, CourseDto dto)
        {
            course.Title = dto.Title.HasValue() ? dto.Title : course.Title;
            course.Price = dto.Price > 0 ? dto.Price : course.Price;
            course.Duration = dto.Duration.HasValue() ? dto.Duration : course.Duration;
            course.FileName = dto.FileName.HasValue() ? dto.FileName : course.FileName;
            course.Status = dto.Status.HasValue() ? dto.Status : course.Status;
            course.VideoId = dto.VideoId.HasValue() ? dto.VideoId : course.VideoId;
        }
    }
}