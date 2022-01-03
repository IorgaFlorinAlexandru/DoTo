using Application.Projects.Commands.CreateProject;
using Application.Projects.Queries;
using Domain.DTO.ProjectDTOs;
using Domain.Entities.ProductivityEntities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ApiControllerBase
    {
        [HttpPost("create")]
        [Authorize]
        public async Task<int> CreateProject(CreateProjectCommand command)
            => await Create(command);

        [HttpGet("{id}")]
        public async Task<Project> GetProject(int id)
            => await Mediator.Send(new GetProjectByIdQuery { Id = id });

        [HttpGet("project-categories/{id}")]
        public async Task<List<Category>> GetProjectTaskCategories(int id)
            => await Mediator.Send(new GetProjectTaskCategoriesQuery { Id = id });

        [HttpGet("getUserProjects")]
        public async Task<ListOfProjects> GetUserProjects()
            => await Mediator.Send(new GetUserProjectsQuery { Id = GetUserId() });

        protected async Task<int> Create(CreateProjectCommand command)
        {
            command.UserId = GetUserId();
            return await Mediator.Send(command);
        }
    }
}
