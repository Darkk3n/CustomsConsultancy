using CustomsConsultancy.Admin.Api.Dtos;

namespace CustomsConsultancy.Admin.Api.Contracts
{
    public interface IClientCreateService
    {
        Task<int> GetOrCreateClient(CourseRegistrationDto request);
    }
}