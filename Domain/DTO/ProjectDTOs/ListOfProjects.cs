using Domain.Entities.ProductivityEntities;
using System;
using System.Collections.Generic;

namespace Domain.DTO.ProjectDTOs
{
    public class ListOfProjects
    {
        public int Count { get; set; }
        public ICollection<UserProfileProject> UserProjects { get; set; }
        public ListOfProjects(List<Project> list)
        {
            Count = list.Count;
            UserProjects = new List<UserProfileProject>();

            foreach (var project in list)
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
        public string Status { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime EndDate { get; set; }
        public int Days { get; set; }

        public UserProfileProject(Project project)
        {
            Id = project.Id;
            Name = project.Name;
            Description = project.Description;
            Version = project.Version;
            Status = project.Status;
            CreatedDate = project.CreatedDate;
            EndDate = project.EndDate;
            Days = (int)(EndDate - DateTime.Now).TotalDays;
        }
    }
}
