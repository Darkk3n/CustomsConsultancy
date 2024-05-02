using CustomsConsultancy.Admin.Api.Contracts;
using CustomsConsultancy.Admin.Api.Dtos;
using CustomsConsultancy.Admin.Api.Models;

namespace CustomsConsultancy.Admin.Api.Services
{
    public class ClientCreateService : IClientCreateService
    {
        private readonly ConsultancyContext context;

        public ClientCreateService(ConsultancyContext context)
        {
            this.context = context;
        }
        public async Task<int> GetOrCreateClient(CourseRegistrationDto request)
        {
            var clientId = 0;
            var existingClient = context.Clients.FirstOrDefault(r => r.Email == request.Email);
            if (existingClient == null)
            {
                var newClient = new Client
                {
                    Email = request.Email,
                    Name = request.FirstName + " " + request.LastName,

                };
                context.Clients.Add(newClient);
                await context.SaveChangesAsync();
            }
            else
                clientId = existingClient.Id;

            return clientId;
        }
    }
}