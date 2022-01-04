using Application.Common.Interfaces;
using Domain.DTO.AuthDTOs;
using Domain.DTO.ProjectDTOs;
using Domain.Entities.AuthEntities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.ApplicationUser.Queries
{
    public class GetUserProfileQuery: IRequest<UserProfile>
    {
        public string Id { get; set; }
    }

    public class GetUserProfileQueryHandler: IRequestHandler<GetUserProfileQuery, UserProfile>
    {
        private readonly IApplicationDbContext _context;

        public GetUserProfileQueryHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<UserProfile> Handle(GetUserProfileQuery request, CancellationToken cancellationToken)
        {
            var user = await _context.ApplicationUsers.Where(x => x.Id == request.Id).FirstOrDefaultAsync();

            var profile = new UserProfile
            {
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
            };


            return profile;
        }
    }
}
