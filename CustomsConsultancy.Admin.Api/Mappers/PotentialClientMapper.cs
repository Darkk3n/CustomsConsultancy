using CustomsConsultancy.Admin.Api.Dtos;
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
            PotentialClientType = potentialClient.PotentialClientType,
            TopicsOfInterest = potentialClient.TopicsOfInterest
        };

        public static IEnumerable<PotentialClientDto> ToDtoList(IEnumerable<PotentialClient> potentialClients)
        {
            var toReturn = new List<PotentialClientDto>();
            toReturn.AddRange(potentialClients.Select(r => new PotentialClientDto
            {
                Name = r.Name,
                Email = r.Email,
                Phone = r.Phone,
                PotentialClientType = r.PotentialClientType,
                TopicsOfInterest = r.TopicsOfInterest
            }));
            return toReturn;
        }

        public static PotentialClient FromDto(PotentialClientDto dto) => new()
        {
            Name = dto.Name,
            Email = dto.Name,
            Phone = dto.Phone,
            PotentialClientType = dto.Phone,
            TopicsOfInterest = dto.TopicsOfInterest
        };
    }
}