namespace CustomsConsultancy.Admin.Api.Contracts
{
    public interface IEmailService
    {
        Task Send(string emailToSend, string response, bool isPotentialClient);
    }
}