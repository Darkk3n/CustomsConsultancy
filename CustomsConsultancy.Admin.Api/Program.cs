using CustomsConsultancy.Admin.Api;
using CustomsConsultancy.Admin.Api.Endpoints;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<ConsultancyContext>(opt => opt.UseSqlite("Data Source = CustomConsultancy.db"));
builder.Services.AddCors(opt =>
{
    opt.AddPolicy("Policy", policy =>
    {
        policy
        .WithOrigins("http://localhost:3006", "http://127.0.0.1:3006", "http://localhost:5173")
        // .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader();
    });
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.AddPotentialClientsEndpoints();
app.AddCoursesEndpoints();
app.AddInquiriesEndpoints();
app.AddCourseRegistrationEndpoints();

app.UseCors("Policy");

app.Run();