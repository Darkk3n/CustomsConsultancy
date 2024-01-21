namespace CustomsConsultancy.Admin.Api.Dtos
{
    public record PotentialClientDto
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string ClientType { get; set; }
        public string OtherClientType { get; set; }
        public string TopicsOfInterest { get; set; }
        public bool Contacted { get; set; }
    }
}