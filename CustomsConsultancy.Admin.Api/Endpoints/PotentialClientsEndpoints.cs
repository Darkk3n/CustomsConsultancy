using AutoMapper;
using CustomsConsultancy.Admin.Api.Dtos;
using CustomsConsultancy.Admin.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace CustomsConsultancy.Admin.Api.Endpoints
{
    public static class PotentialClientsEndpoints
    {
        public static void AddPotentialClientsEndpoints(this WebApplication app)
        {
            app.MapPost("/api/PotentialClient", async (ConsultancyContext context, IMapper mapper, [FromBody] PotentialClientDto potentialClientDto) =>
            {
                var newRecord = mapper.Map<PotentialClient>(potentialClientDto);
                context.PotentialClients.Add(newRecord);
                await context.SaveChangesAsync();
            });
        }
    }
}