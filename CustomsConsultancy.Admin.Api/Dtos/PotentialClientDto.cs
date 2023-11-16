using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomsConsultancy.Admin.Api.Dtos
{
    public class PotentialClientDto
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string PotentialClientType { get; set; }
        public string TopicsOfInterest { get; set; }
    }
}