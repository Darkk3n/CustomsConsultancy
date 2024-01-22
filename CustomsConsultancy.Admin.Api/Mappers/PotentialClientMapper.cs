using CustomsConsultancy.Admin.Api.Dtos;
using CustomsConsultancy.Admin.Api.Extensions;
using CustomsConsultancy.Admin.Api.Models;

namespace CustomsConsultancy.Admin.Api.Mappers
{
    public static class PotentialClientMapper
    {
        public static PotentialClientDto ToDto(PotentialClient potentialClient) => new()
        {
            Name = potentialClient.Name,
            Email = potentialClient.Email,
            Phone = potentialClient.Phone,
            ClientType = potentialClient.PotentialClientType,
            TopicsOfInterest = potentialClient.TopicsOfInterest,
            Contacted = potentialClient.Contacted,
            DateContacted = potentialClient.DateContacted
        };

        public static IEnumerable<PotentialClientDto> ToDtoList(IEnumerable<PotentialClient> potentialClients)
        {
            var toReturn = new List<PotentialClientDto>();
            toReturn.AddRange(potentialClients.Select(r => new PotentialClientDto
            {
                Name = r.Name,
                Email = r.Email,
                Phone = r.Phone,
                ClientType = r.PotentialClientType,
                TopicsOfInterest = r.TopicsOfInterest,
                Contacted = r.Contacted,
                DateContacted = r.DateContacted
            }));
            return toReturn;
        }

        public static PotentialClient FromDto(PotentialClientDto dto) => new()
        {
            Name = dto.Name,
            Email = dto.Email,
            Phone = dto.Phone,
            PotentialClientType = dto.OtherClientType.HasValue() ? dto.OtherClientType : dto.ClientType,
            TopicsOfInterest = dto.TopicsOfInterest
        };
    }
}