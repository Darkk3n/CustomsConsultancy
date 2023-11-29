using System.Runtime.CompilerServices;
using CustomsConsultancy.Admin.Api.Dtos;
using CustomsConsultancy.Admin.Api.Mappers;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MimeKit;

namespace CustomsConsultancy.Admin.Api.Endpoints
{
    public static class InquiriesEndpoints
    {
        public static void AddInquiriesEndpoints(this WebApplication app)
        {
            app.MapPost("/api/inquiries", async (ConsultancyContext context, [FromBody] InquiryCreateDto dto) =>
            {
                var inquiry = InquiryMapper.FromDto(dto);
                context.Inquiry.Add(inquiry);
                await context.SaveChangesAsync();
            });

            app.MapGet("/api/inquiries", async (ConsultancyContext context) =>
            {
                var inquiries = await context.Inquiry.ToListAsync();
                return Results.Ok(InquiryMapper.ToDtoList(inquiries));
            });

            app.MapPost("/api/inquiries/answer/{inquiryid}", async (ConsultancyContext context, int inquiryid, [FromBody] InquiryAnswerDto dto) =>
            {
                var selectedInquiry = await context.Inquiry.FindAsync(inquiryid);
                selectedInquiry.Answered = true;
                await context.SaveChangesAsync();
                await SendEmail(dto.Response, selectedInquiry);
                return Results.Ok();
            });

        }
        private static async Task SendEmail(string response, Models.Inquiry selectedInquiry)
        {
            var message = new MimeMessage();
            message.Subject = "I.C. Aduanal - ";
            message.From.Add(MailboxAddress.Parse("from email"));
            message.To.Add(MailboxAddress.Parse(selectedInquiry.Email));
            message.Body = new TextPart(MimeKit.Text.TextFormat.Html)
            {
                Text = response
            };
            using var client = new SmtpClient();
            await client.ConnectAsync("smtp.gmail.com", 587, SecureSocketOptions.StartTls);

            await client.AuthenticateAsync("username", "password");

            await client.SendAsync(message);

            await client.DisconnectAsync(true);
        }
    }
}