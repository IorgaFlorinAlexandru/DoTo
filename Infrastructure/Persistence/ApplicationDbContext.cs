using Application.Common.Interfaces;
using Domain.Entities.AuthEntities;
using Domain.Entities.ProductivityEntities;
using Infrastructure.Identity.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace Infrastructure.Persistence
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>, IApplicationDbContext
    {
        public DbSet<User> ApplicationUsers { get; set;}
        public DbSet<Domain.Entities.ProductivityEntities.Task> Tasks { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Project> Projects { get; set; }

        public DbContext Instance { get; }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken)
        {
            return SaveChangesAsync(acceptAllChangesOnSuccess: true, cancellationToken);
        }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            Configuration.Config(modelBuilder);

        }

    }
}
