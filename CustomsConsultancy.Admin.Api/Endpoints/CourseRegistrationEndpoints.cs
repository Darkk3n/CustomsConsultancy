using CustomsConsultancy.Admin.Api.Mappers;
using Microsoft.EntityFrameworkCore;

namespace CustomsConsultancy.Admin.Api.Endpoints
{
    public static class CourseRegistrationEndpoints
    {
        public static void AddCourseRegistrationEndpoints(this WebApplication app)
        {
            app.MapGet("/api/courseRegistration/{courseid}", async (ConsultancyContext context, int courseId) =>
            {
                var registrations = await context.CourseClients
                .Where(r => r.CourseId == courseId)
                .ToListAsync();

                return Results.Ok(CourseRegistrationMapper.ToDtoList(registrations));
            });
        }
    }
}