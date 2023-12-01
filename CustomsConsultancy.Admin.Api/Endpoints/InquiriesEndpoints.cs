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
        }
    }
}