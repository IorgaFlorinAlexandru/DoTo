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
    public class GetCategoryByIdQuery: IRequest<Category>
    {
        public int Id { get; set; }

    }

    public class GetCategoryByIdRequestHandler: IRequestHandler<GetCategoryByIdQuery, Category>
    {
        private readonly IApplicationDbContext _context;

        public GetCategoryByIdRequestHandler(IApplicationDbContext context)
        {
            _context = context;
        }


        public async Task<Category> Handle(GetCategoryByIdQuery request, CancellationToken cancellationToken)
        {
            var category = await _context.Categories.Where(x => x.Id == request.Id).FirstOrDefaultAsync();
            return category;
        }
    }
}
