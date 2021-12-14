using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Identity.Models
{
    public class RegisterResult
    {
        public string AccountId { get; set; }

        public IdentityResult IdentityResult { get; set; }
    }
}
