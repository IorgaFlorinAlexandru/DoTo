using Application.Common.Interfaces;
using Domain.DTO.ProjectDTOs;
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
    public class GetUserProjectsQuery: IRequest<ListOfProjects>
    {
        public string Id { get; set; }
    }

    public class GetUserProjectsQueryHandler: IRequestHandler<GetUserProjectsQuery,ListOfProjects>
    {
        private readonly IApplicationDbContext _context;
        public GetUserProjectsQueryHandler(IApplicationDbContext context)
        {
            _context = context; 
        }


        public async Task<ListOfProjects> Handle(GetUserProjectsQuery request, CancellationToken cancellationToken)
        {
            var projects = await _context.Projects.Where(x => x.UserId == request.Id).ToListAsync();

            ListOfProjects list = new ListOfProjects(projects);

            return list;

        }
    }
}
