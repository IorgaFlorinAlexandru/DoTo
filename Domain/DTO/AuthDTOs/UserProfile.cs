using Domain.Entities.ProductivityEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.DTO.AuthDTOs
{
    public class UserProfile
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public ListOfProjects Projects { get; set; }
    }

    public class ListOfProjects
    {
        public int Count { get; set; }
        public ICollection<UserProfileProject> UserProjects { get; set; }

        public ListOfProjects(List<Project> list)
        {
            Count = list.Count;
            UserProjects = new List<UserProfileProject>();

            foreach(var project in list)
            {
                UserProjects.Add(new UserProfileProject(project));
            }
        }
    }

    public class UserProfileProject
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Version { get; set; }
        public DateTime CreatedDate { get; set; }

        public UserProfileProject(Project project)
        {
            Id = project.Id;
            Name = project.Name;
            Description = project.Description;
            Version = project.Version;
            CreatedDate = project.CreatedDate;
        }
    }
}
