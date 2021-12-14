using Application.Common.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Tasks.Queries
{
    public class GetTaskByIdQuery: IRequest<Domain.Entities.ProductivityEntities.Task>
    {
        public int Id { get; set; } 
    }

    public class GetTaskByIdQueryHandler: IRequestHandler<GetTaskByIdQuery,Domain.Entities.ProductivityEntities.Task>
    {
        private readonly IApplicationDbContext _context;

        public GetTaskByIdQueryHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Domain.Entities.ProductivityEntities.Task> Handle(GetTaskByIdQuery request, CancellationToken cancellationToken)
        {
            var task =  await _context.Tasks.Where(x => x.Id == request.Id).FirstOrDefaultAsync();
            return task;
        }
    }
}
