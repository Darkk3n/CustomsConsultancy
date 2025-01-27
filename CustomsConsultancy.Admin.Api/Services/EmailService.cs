using CustomsConsultancy.Admin.Api.Contracts;
using MimeKit;
using MailKit.Net.Smtp;
using CustomsConsultancy.Admin.Api.Extensions;

namespace CustomsConsultancy.Admin.Api.Services
{
    public class EmailService : IEmailService
    {
        public async Task Send(string emailToSend, string response, bool isPotentialClient)
        {
            var message = CreateMessage(isPotentialClient, response, emailToSend);
            await SendEmail(message);
        }

        public async Task SendWithAttachment(string emailToSend, string response, string attachmentPath, string fileName)
        {
            var message = CreateMessage(false, response, emailToSend, attachmentPath, fileName);
            await SendEmail(message);
        }

        private static async Task SendEmail(MimeMessage message)
        {
            using var client = new SmtpClient();
            await client.ConnectAsync("smtp.gmail.com", 587, false);

            await client.AuthenticateAsync("gerraguilar@gmail.com", "omoropcjbdffexdg");

            await client.SendAsync(message);

            await client.DisconnectAsync(true);
        }

        private static MimeMessage CreateMessage(bool isPotentialClient, string response, string emailToSend, string attachmentPath = "", string fileName = "")
        {
            var message = new MimeMessage
            {
                Subject = isPotentialClient ? $"I.C. Aduanal - Contacto" : "I.C. Aduanal - Respuesta a Pregunta"
            };

            message.From.Add(MailboxAddress.Parse("gerraguilar@gmail.com"));
            message.To.Add(MailboxAddress.Parse(emailToSend));

            var body = new BodyBuilder
            {
                TextBody = response
            };

            if (attachmentPath.HasValue() && fileName.HasValue())
            {
                body.Attachments.Add(fileName, File.ReadAllBytes(attachmentPath));
            }
            message.Body = body.ToMessageBody();

            return message;
        }
    }
}