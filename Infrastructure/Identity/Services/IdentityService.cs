using Infrastructure.Identity.Interfaces;
using Infrastructure.Identity.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Identity.Services
{
    public class IdentityService : IIdentityService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IConfiguration _config;

        public IdentityService(UserManager<ApplicationUser> userManager, IConfiguration config)
        {
            _userManager = userManager;
            _config = config;
        }

        public async Task<string> Login(LoginUserModel model)
        {
            try
            {
                var user = await (_userManager.FindByNameAsync(model.UserName));
                if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
                {
                    var tokenDescriptor = new SecurityTokenDescriptor
                    {
                        Subject = new ClaimsIdentity(new Claim[]
                        {
                            new Claim("UserID",user.Id.ToString())
                        }),
                        Expires = DateTime.UtcNow.AddDays(1),
                        SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetValue<string>("ApplicationSettings:JWT_Secret"))), SecurityAlgorithms.HmacSha256Signature)
                    };
                    var tokenHandler = new JwtSecurityTokenHandler();
                    var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                    var token = tokenHandler.WriteToken(securityToken);
                    return token;
                }
                else if (user == null)
                {
                    throw new Exception("User doesn't exist.");
                }
                else
                {
                    throw new Exception("Password is incorrect.");
                }

            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<RegisterResult> Register(RegisterUserModel model)
        {
            try
            {
                ApplicationUser user = new ApplicationUser()
                {
                    UserName = model.UserName,
                    Email = model.Email
                };

                RegisterResult result = new RegisterResult{
                   AccountId = user.Id,
                   IdentityResult = await _userManager.CreateAsync(user, model.Password) 
                };

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
