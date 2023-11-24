using CustomsConsultancy.Admin.Api.Dtos;
using CustomsConsultancy.Admin.Api.Mappers;
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
                var newRecord = PotentialClientMapper.FromDto(potentialClientDto);
                context.PotentialClients.Add(newRecord);
                await context.SaveChangesAsync();
            });

            app.MapGet("/api/PotentialClient", async (ConsultancyContext context) =>
            {
                var data = await context.PotentialClients.ToListAsync();
                return Results.Ok(PotentialClientMapper.ToDtoList(data));
            });
        }
    }
}