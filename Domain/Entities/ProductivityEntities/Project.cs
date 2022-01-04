using Domain.Entities.AuthEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.ProductivityEntities
{
    public class Project
    {
        //Project Data & Info
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Version { get; set; }
        public string Status { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime EndDate { get; set; }

        //Customizable data
        public string ColorTheme { get; set; }
        public string ProjectIcon { get; set; }

        //One-to-Many relantionship

        // | Category -> Project |
        public ICollection<Category> TaskCategories { get; set; }

        // | Project -> User |
        public string UserId { get; set; }
        public User User { get; set; }


    }
}
