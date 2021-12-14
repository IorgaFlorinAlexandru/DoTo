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

namespace Application.Projects.Queries
{
    public class GetProjectTaskCategoriesQuery: IRequest<List<Category>>
    {
        public int Id { get; set; }
    }

    public class GetProjectTaskCategoriesQueryHandler : IRequestHandler<GetProjectTaskCategoriesQuery, List<Category>>
    {
        private readonly IApplicationDbContext _context;

        public GetProjectTaskCategoriesQueryHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<Category>> Handle(GetProjectTaskCategoriesQuery request, CancellationToken cancellationToken)
        {
            var projectCategories = _context.Categories.Where(c => c.ProjectId == request.Id);
            return await projectCategories.ToListAsync();
        }
    }
}
