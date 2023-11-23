using CustomsConsultancy.Admin.Api.Dtos;

namespace CustomsConsultancy.Admin.Api.Models
{
    public class PotentialClient : BaseEntity
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string PotentialClientType { get; set; }
        public string TopicsOfInterest { get; set; }

        public static PotentialClient FromDto(PotentialClientDto dto)
        {
            return new PotentialClient
            {
                Name = dto.Name,
                Email = dto.Name,
                Phone = dto.Phone,
                PotentialClientType = dto.Phone,
                TopicsOfInterest = dto.TopicsOfInterest
            };
        }
    }
}