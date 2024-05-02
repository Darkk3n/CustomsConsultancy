using CustomsConsultancy.Admin.Api.Contracts;
using CustomsConsultancy.Admin.Api.Dtos;
using CustomsConsultancy.Admin.Api.Mappers;
using Microsoft.AspNetCore.Mvc;
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

            app.MapPost("/api/courseRegistration/", async (ConsultancyContext context, IClientCreateService clientCreateService, [FromBody] CourseRegistrationDto registration) =>
            {
                var resultClientId = await clientCreateService.GetOrCreateClient(registration);
                context.CourseClients.Add(CourseRegistrationMapper.ToModel(registration, resultClientId));
                await context.SaveChangesAsync();
                return Results.Ok();
            });
        }
    }
}