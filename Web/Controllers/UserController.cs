using Application.ApplicationUser.Queries;
using Domain.DTO.AuthDTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ApiControllerBase
    {

        [HttpGet("getUserProfile")]
        [Authorize]
        public async Task<UserProfile> GetUserProfile()
            => await Mediator.Send(new GetUserProfileQuery { Id = GetUserId() });

    }
}
