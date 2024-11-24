using CustomsConsultancy.Admin.Api.Contracts;
using CustomsConsultancy.Admin.Api.Dtos;
using CustomsConsultancy.Admin.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace CustomsConsultancy.Admin.Api.Services
{
    public class ClientCreateService(ConsultancyContext context) : IClientCreateService
    {
        private readonly ConsultancyContext context = context;

        public async Task<int> GetOrCreateClient(CourseRegistrationDto request)
        {
            var clientId = 0;
            var existingClient = await context.Clients.FirstOrDefaultAsync(r => r.Email == request.Email);
            if (existingClient == null)
            {
                var newClient = new Client
                {
                    Email = request.Email,
                    Name = request.FirstName,
                    LastName = request.LastName,
                };
                context.Clients.Add(newClient);
                await context.SaveChangesAsync();
                clientId = newClient.Id;
            }
            else
                clientId = existingClient.Id;

            return clientId;
        }
    }
}