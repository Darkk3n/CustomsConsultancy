using CustomsConsultancy.Admin.Api.Dtos;
using CustomsConsultancy.Admin.Api.Mappers;
using MailKit.Net.Smtp;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MimeKit;

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

            app.MapPost("/api/PotentialClient/answer", async (ConsultancyContext context, PotentialClientForm potentialClientForm) =>
            {
                var potentialClientIdsStr = potentialClientForm.PotentialClientIds.Split(",");
                var data = await context.PotentialClients
                    .Where(r => potentialClientIdsStr.Contains(r.Id.ToString()))
                    .ToListAsync();
                foreach (var item in data)
                {
                    await SendEmail(potentialClientForm.Message, item.Email);
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

        private static async Task SendEmail(string response, string email)
        {
            var message = new MimeMessage
            {
                Subject = $"I.C. Aduanal - Contacto"
            };
            message.From.Add(MailboxAddress.Parse("gerraguilar@gmail.com"));
            message.To.Add(MailboxAddress.Parse(email));
            message.Body = new TextPart(MimeKit.Text.TextFormat.Html)
            {
                Text = response
            };
            using var client = new SmtpClient();
            await client.ConnectAsync("smtp.gmail.com", 587, false);

            await client.AuthenticateAsync("gerraguilar@gmail.com", "omoropcjbdffexdg");

            await client.SendAsync(message);

            await client.DisconnectAsync(true);
        }
    }
}