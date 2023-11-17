using AutoMapper;
using CustomsConsultancy.Admin.Api.Dtos;
using CustomsConsultancy.Admin.Api.Models;

namespace CustomsConsultancy.Admin.Api
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<PotentialClient, PotentialClientDto>().ReverseMap();
            CreateMap<IEnumerable<PotentialClient>, IEnumerable<PotentialClientDto>>().ReverseMap();
        }
    }
}