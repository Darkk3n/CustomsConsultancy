using CustomsConsultancy.Admin.Api.Dtos;
using CustomsConsultancy.Admin.Api.Models;

namespace CustomsConsultancy.Admin.Api.Mappers
{
    public static class CourseRegistrationMapper
    {
        public static List<CourseRegistrationDto> ToDtoList(List<CourseClients> registrations)
        {
            var toReturn = new List<CourseRegistrationDto>();
            toReturn.AddRange(registrations.Select(r => new CourseRegistrationDto
            {
                ClientId = r.ClientId,
                CourseId = r.CourseId
            }));
            return toReturn;
        }

        public static CourseClients ToModel(CourseRegistrationDto registration, int clientId) => new()
        {
            ClientId = clientId,
            CourseId = registration.CourseId,
            PaymentMethod = GetPaymentMethodIdFromString(registration.PaymentMethod),
            PersonOrCompanyName = registration.PersonOrCompanyName,
            PostalCode = registration.PostalCode,
            RequiresInvoice = registration.RequiresInvoice,
            Rfc = registration.Rfc,
            TaxPayerEmail = registration.TaxPayerEmail,
            TaxRegime = registration.TaxRegime,
        };

        private static int GetPaymentMethodIdFromString(string paymentMethod)
            => paymentMethod switch
            {
                "transfer" => 1,
                "deposit" => 2,
                _ => 0
            };
    }
}