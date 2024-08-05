using CustomsConsultancy.Admin.Api.Contracts;
using MimeKit;
using MailKit.Net.Smtp;

namespace CustomsConsultancy.Admin.Api.Services
{
    public class EmailService : IEmailService
    {
        public async Task Send(string emailToSend, string response, bool isPotentialClient)
        {
            var message = new MimeMessage
            {
                Subject = isPotentialClient ? $"I.C. Aduanal - Contacto" : "I.C. Aduanal - Respuesta a Pregunta"
            };
            message.From.Add(MailboxAddress.Parse("gerraguilar@gmail.com"));
            message.To.Add(MailboxAddress.Parse(emailToSend));
            message.Body = new TextPart(MimeKit.Text.TextFormat.Html)
            {
                Text = response
            };
            using var client = new SmtpClient();
            await client.ConnectAsync("smtp.gmail.com", 587, false);

            await client.AuthenticateAsync("gerraguilar@gmail.com", "omoropcjbdffexdg");

            await client.SendAsync(message);

            await client.DisconnectAsync(true);
        }
    }
}