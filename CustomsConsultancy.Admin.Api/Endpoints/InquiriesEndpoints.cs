using CustomsConsultancy.Admin.Api.Dtos;
using CustomsConsultancy.Admin.Api.Mappers;
using CustomsConsultancy.Admin.Api.Models;
using MailKit.Net.Smtp;
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

            app.MapGet("api/inquiries/{inquiryid}", async (ConsultancyContext context, int inquiryid) =>
            {
                var inquiry = await context.Inquiry.FindAsync(inquiryid);
                if (inquiry == null)
                {
                    return Results.NotFound();
                }
                return Results.Ok(InquiryMapper.ToDto(inquiry));
            });

            app.MapPost("/api/inquiries/answer/{inquiryid}", async (ConsultancyContext context, int inquiryid, [FromBody] InquiryAnswerDto dto) =>
            {
                var selectedInquiry = await context.Inquiry.FindAsync(inquiryid);
                selectedInquiry.Answered = true;
                await context.SaveChangesAsync();
                try
                {
                    await SendEmail(dto.Response, selectedInquiry);
                    return Results.Ok();
                }
                catch (Exception)
                {
                    return Results.BadRequest();
                }
            });

        }
        private static async Task SendEmail(string response, Inquiry selectedInquiry)
        {
            var message = new MimeMessage
            {
                Subject = $"I.C. Aduanal - Respuesta a pregunta"
            };
            message.From.Add(MailboxAddress.Parse("gerraguilar@gmail.com"));
            message.To.Add(MailboxAddress.Parse(selectedInquiry.Email));
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