using Application.Common.Interfaces;
using Domain.Entities.ProductivityEntities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Categories.Queries
{
    public class GetCategoryTasksQuery : IRequest<List<Domain.Entities.ProductivityEntities.Task>>
    {
        public int Id { get; set; }
    }

    public class GetCategoryTaskQueryHandler: IRequestHandler<GetCategoryTasksQuery,List<Domain.Entities.ProductivityEntities.Task>>
    {
        private readonly IApplicationDbContext _context;

        public GetCategoryTaskQueryHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<Domain.Entities.ProductivityEntities.Task>> Handle(GetCategoryTasksQuery request, CancellationToken cancellationToken)
        {
            var tasks = _context.Tasks.Where(x => x.CategoryId == request.Id);
            return await tasks.ToListAsync();
        }
    }
}
