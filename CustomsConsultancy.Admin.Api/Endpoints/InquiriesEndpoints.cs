using CustomsConsultancy.Admin.Api.Contracts;
using CustomsConsultancy.Admin.Api.Dtos;
using CustomsConsultancy.Admin.Api.Mappers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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

            app.MapPost("/api/inquiries/answer/{inquiryid}", async (ConsultancyContext context, IEmailService emailService, int inquiryid, [FromBody] InquiryAnswerDto dto) =>
            {
                var selectedInquiry = await context.Inquiry.FindAsync(inquiryid);
                selectedInquiry.Answered = true;
                selectedInquiry.Answer = dto.Response;
                await context.SaveChangesAsync();
                try
                {
                    await emailService.Send(selectedInquiry.Email, dto.Response, false);
                    return Results.Ok(InquiryMapper.ToDto(selectedInquiry));
                }
                catch (Exception)
                {
                    return Results.BadRequest();
                }
            });

        }
    }
}