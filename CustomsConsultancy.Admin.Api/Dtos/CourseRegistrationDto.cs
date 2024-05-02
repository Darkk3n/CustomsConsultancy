namespace CustomsConsultancy.Admin.Api.Dtos
{
    public record CourseRegistrationDto
    {
        public int CourseId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string FileName { get; set; }
        public int? ClientId { get; set; }
    }
}