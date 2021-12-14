using Infrastructure.Identity.Models;
using System.Threading.Tasks;

namespace Infrastructure.Identity.Interfaces
{
    public interface IIdentityService
    {
        Task<string> Login(LoginUserModel model);
        Task<RegisterResult> Register(RegisterUserModel model);
    }
}
