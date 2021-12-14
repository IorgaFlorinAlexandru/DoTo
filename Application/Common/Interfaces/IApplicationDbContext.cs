using Domain.Entities.AuthEntities;
using Domain.Entities.ProductivityEntities;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Common.Interfaces
{
    public interface IApplicationDbContext
    {
        DbContext Instance { get; }
        public DbSet<User> ApplicationUsers { get; set; }
        public Task<int> SaveChangesAsync(CancellationToken cancellationToken);
        public DbSet<Domain.Entities.ProductivityEntities.Task> Tasks { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Project> Projects { get; set; }
    }
}
