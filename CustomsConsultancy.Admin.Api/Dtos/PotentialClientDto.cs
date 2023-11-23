using CustomsConsultancy.Admin.Api.Models;

namespace CustomsConsultancy.Admin.Api.Dtos
{
    public class PotentialClientDto
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string PotentialClientType { get; set; }
        public string TopicsOfInterest { get; set; }

        public static PotentialClientDto ToDto(PotentialClient potentialClient)
        {
            return new PotentialClientDto
            {
                Name = potentialClient.Name,
                Email = potentialClient.Email,
                Phone = potentialClient.Phone,
                PotentialClientType = potentialClient.PotentialClientType,
                TopicsOfInterest = potentialClient.TopicsOfInterest
            };
        }

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
    }
}