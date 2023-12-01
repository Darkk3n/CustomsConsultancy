using CustomsConsultancy.Admin.Api.Dtos;
using CustomsConsultancy.Admin.Api.Models;

namespace CustomsConsultancy.Admin.Api.Mappers
{
    public static class InquiryMapper
    {
        public static Inquiry FromDto(InquiryDto dto)
        {
            return new Inquiry
            {
                ClientName = dto.Name,
                ClientLastName = dto.LastName,
                Company = dto.Company,
                Email = dto.Email,
                Phone = dto.Phone,
                MobilePhone = dto.MobilePhone,
                Question = dto.Inquiry
            };
        }

        public static IEnumerable<InquiryDto> ToDtoList(IEnumerable<Inquiry> inquiries)
        {
            var toReturn = new List<InquiryDto>();
            toReturn.AddRange(inquiries.Select(i => new InquiryDto
            {
                InquiryId = i.Id,
                Name = i.ClientName,
                LastName = i.ClientLastName,
                Company = i.Company,
                Email = i.Email,
                Phone = i.Phone,
                Inquiry = i.Question,
                MobilePhone = i.MobilePhone,
                Answered = i.Answered
            }));
            return toReturn;
        }
    }
}