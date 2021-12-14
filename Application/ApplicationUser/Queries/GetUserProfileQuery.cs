using Application.Common.Interfaces;
using Domain.Entities.AuthEntities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.ApplicationUser.Queries
{
    public class GetUserProfileQuery: IRequest<User>
    {
        public string Id { get; set; }
    }

    public class GetUserProfileQueryHandler: IRequestHandler<GetUserProfileQuery, User>
    {
        private readonly IApplicationDbContext _context;

        public Task<User> Handle(GetUserProfileQuery request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
