using Application.Tasks.Commands.CreateTask;
using Application.Tasks.Commands.DeleteTask;
using Application.Tasks.Queries;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ApiControllerBase
    {
        [HttpPost("create")]
        public async Task<int> CreateTask(CreateTaskCommand command)
            => await Mediator.Send(command);

        [HttpGet("{id}")]
        public async Task<Domain.Entities.ProductivityEntities.Task> GetTaskById(int id)
            => await Mediator.Send(new GetTaskByIdQuery { Id = id });

        [HttpDelete("delete/{id}")]
        public async Task<bool> DeleteTask(int id)
            => await Mediator.Send(new DeleteTaskCommand { Id = id });

    }
}
