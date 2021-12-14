using Domain.Entities.ProductivityEntities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Persistence
{
    public static class Configuration
    {
        public static void Config(ModelBuilder modelBuilder)
        {
            //One-To-Many Relantionships

            // Task -> Category
            modelBuilder.Entity<Domain.Entities.ProductivityEntities.Task>()
                .HasOne(s => s.Category)
                .WithMany(g => g.Tasks)
                .HasForeignKey(s => s.CategoryId);

            //Category -> Project
            modelBuilder.Entity<Category>()
                .HasOne(s => s.Project)
                .WithMany(g => g.TaskCategories)
                .HasForeignKey(s => s.ProjectId);

            //Project -> User
            modelBuilder.Entity<Project>()
                .HasOne(s => s.User)
                .WithMany(u => u.Projects)
                .HasForeignKey(s => s.UserId);

            //Task -> Category -> Project -> User
        }
    }
}
