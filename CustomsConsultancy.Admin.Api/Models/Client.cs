namespace CustomsConsultancy.Admin.Api.Models
{
    public class Client : BaseEntity
    {
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }

        public List<Course> Courses { get; } = [];
    }
}