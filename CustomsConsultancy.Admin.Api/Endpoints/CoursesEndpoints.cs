using CustomsConsultancy.Admin.Api.Dtos;
using CustomsConsultancy.Admin.Api.Mappers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CustomsConsultancy.Admin.Api.Endpoints
{
    public static class CoursesEndpoints
    {
        public static void AddCoursesEndpoints(this WebApplication app)
        {
            app.MapGet("/api/courses/{courseid}", async (ConsultancyContext context, int courseid) =>
            {
                var course = await context.Course.FindAsync(courseid);
                if (course is null)
                {
                    return Results.NotFound();
                }
                return Results.Ok(CourseMapper.FromModel(course));
            });

            app.MapGet("/api/courses", async (ConsultancyContext context) =>
            {
                var courses = await context.Course.ToListAsync();
                if (courses is null)
                {
                    return Results.NotFound();
                }
                return Results.Ok(CourseMapper.FromModelList(courses));
            });

            app.MapPost("/api/courses", async (ConsultancyContext context, [FromBody] CourseDto dto) =>
            {
                context.Course.Add(CourseMapper.FromDto(dto));
                await context.SaveChangesAsync();
                return Results.Ok();
            });

            app.MapPut("/api/courses/{courseid}", async (ConsultancyContext context, int courseid, [FromBody] CourseDto dto) =>
            {
                var course = await context.Course.FindAsync(courseid);
                course.UpdateValues(dto);
                await context.SaveChangesAsync();
                return Results.Ok();
            });

            app.MapDelete("api/courses/{courseid}", async (ConsultancyContext context, int courseid) =>
            {
                var course = await context.Course.FindAsync(courseid);
                context.Course.Remove(course);
                await context.SaveChangesAsync();
                return Results.Ok();
            });
        }
    }
}