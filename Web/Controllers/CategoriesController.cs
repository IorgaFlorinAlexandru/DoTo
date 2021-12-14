using Application.Categories.Commands.CreateCategory;
using Application.Categories.Queries;
using Domain.Entities.ProductivityEntities;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ApiControllerBase
    {
        [HttpPost("create")]
        public async Task<int> CreateCategory(CreateCategoryCommand command) 
            => await Mediator.Send(command);

        [HttpGet("category/{id}")]
        public async Task<Category> GetCategory(int id)
            => await Mediator.Send(new GetCategoryByIdQuery { Id = id });

        [HttpGet("category-tasks/{id}")]
        public async Task<List<Domain.Entities.ProductivityEntities.Task>> GetCategoryTasks(int id)
            => await Mediator.Send(new GetCategoryTasksQuery { Id = id });

    }
}
