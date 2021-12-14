using System.Collections.Generic;

namespace Domain.Entities.ProductivityEntities
{
    public class Category
    { 
        public int Id { get; set; }
        public string Title { get; set; }
        public string Icon { get; set; }
        public ICollection<Task> Tasks { get; set; }
        public int ProjectId { get; set; }
        public Project Project { get; set; }

    }
}
