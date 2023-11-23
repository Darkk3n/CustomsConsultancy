using CustomsConsultancy.Admin.Api.Dtos;
using CustomsConsultancy.Admin.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CustomsConsultancy.Admin.Api.Endpoints
{
    public static class PotentialClientsEndpoints
    {
        public static void AddPotentialClientsEndpoints(this WebApplication app)
        {
            app.MapPost("/api/PotentialClient", async (ConsultancyContext context, [FromBody] PotentialClientDto potentialClientDto) =>
            {
                var newRecord = PotentialClient.FromDto(potentialClientDto);
                context.PotentialClients.Add(newRecord);
                await context.SaveChangesAsync();
            });

            app.MapGet("/api/PotentialClient", async (ConsultancyContext context) =>
            {
                var data = await context.PotentialClients
                .Select(r => new PotentialClient
                {
                    Name = r.Name,
                    Email = r.Email,
                    Phone = r.Phone,
                    PotentialClientType = r.PotentialClientType,
                    TopicsOfInterest = r.TopicsOfInterest
                })
                .ToListAsync();
                return Results.Ok(PotentialClientDto.ToDtoList(data));
            });
        }
    }
}