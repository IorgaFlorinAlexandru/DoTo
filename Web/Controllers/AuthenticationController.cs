using Application.ApplicationUser.Commands;
using Infrastructure.Identity.Interfaces;
using Infrastructure.Identity.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ApiControllerBase
    {
        private readonly IIdentityService _identityService;

        public AuthenticationController(IIdentityService identityService)
        {
            _identityService = identityService;
        }

        [HttpPost("Register")]
        public async Task<ActionResult<IdentityResult>> Register(RegisterUserModel model)
        {
            try
            {
                var result = await _identityService.Register(model);

                if (result.IdentityResult.Succeeded)
                {
                    var command = new CreateUserCommand
                    {
                        Id = result.AccountId,
                        FirstName = model.FirstName,
                        LastName = model.LastName, 
                    };

                    await Mediator.Send(command);
                }

                return Ok(result.IdentityResult);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        [HttpPost("Login")]
        public async Task<ActionResult<string>> Login(LoginUserModel model)
        {
            try
            {
                var token = (await _identityService.Login(model));
                return Ok(new { token });
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
