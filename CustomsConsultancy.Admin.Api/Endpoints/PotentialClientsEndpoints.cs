using CustomsConsultancy.Admin.Api.Contracts;
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
                var data = await context.PotentialClients
                .OrderByDescending(r => r.DateContacted)
                .ToListAsync();
                return Results.Ok(PotentialClientMapper.ToDtoList(data));
            });

            app.MapPost("/api/PotentialClient/answer", async (ConsultancyContext context, IEmailService emailService, [FromBody] PotentialClientForm potentialClientForm) =>
            {
                var potentialClientIdsStr = potentialClientForm.PotentialClientIds.Split(",");
                var data = await context.PotentialClients
                    .Where(r => potentialClientIdsStr.Contains(r.Id.ToString()))
                    .ToListAsync();
                foreach (var item in data)
                {
                    await emailService.Send(item.Email, potentialClientForm.Message, true);
                    item.DateContacted = DateTime.Now;
                    item.Contacted = true;
                    context.PotentialClients.Update(item);
                }
                await context.SaveChangesAsync();
                var newData = await context.PotentialClients
                .OrderByDescending(r => r.DateContacted)
                .AsNoTracking()
                .ToListAsync();
                return Results.Ok(PotentialClientMapper.ToDtoList(newData));
            });
        }
    }
}