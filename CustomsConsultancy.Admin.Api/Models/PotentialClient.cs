using System.ComponentModel.DataAnnotations.Schema;

namespace CustomsConsultancy.Admin.Api.Models
{
    public class PotentialClient : BaseEntity
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string PotentialClientType { get; set; }
        public string TopicsOfInterest { get; set; }
        [Column(TypeName = "bit")]
        public bool Contacted { get; set; } = false;
        public DateTime? DateContacted { get; set; }
    }
}