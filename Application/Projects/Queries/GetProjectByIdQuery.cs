using Application.Common.Interfaces;
using Domain.Entities.ProductivityEntities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Projects.Queries
{
    public class GetProjectByIdQuery: IRequest<Project>
    {
        public int Id { get; set; } 
    }

    public class GetProjectByIdQueryHandler : IRequestHandler<GetProjectByIdQuery, Project>
    {
        private readonly IApplicationDbContext _context;

        public GetProjectByIdQueryHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Project> Handle(GetProjectByIdQuery request, CancellationToken cancellationToken)
        {
            var project = await _context.Projects.Where(x => x.Id == request.Id).FirstOrDefaultAsync();
            return project;
        }
    }
}
