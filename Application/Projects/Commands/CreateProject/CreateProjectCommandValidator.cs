using FluentValidation;

namespace Application.Projects.Commands.CreateProject
{
    public class CreateProjectCommandValidator: AbstractValidator<CreateProjectCommand>
    {
        public CreateProjectCommandValidator()
        {
            RuleFor(x => x.Name).
                NotEmpty();

            RuleFor(x => x.Description).
                NotEmpty();

            RuleFor(x => x.CreatedDate).
                NotEmpty();

            RuleFor(x => x.UserId).
                NotEmpty();
        }
    }
}
