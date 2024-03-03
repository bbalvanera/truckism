using FluentValidation;

namespace Truckism.Helper;

public class SiiRequestValidator : AbstractValidator<SiiRequest>
{
    public SiiRequestValidator()
    {
        RuleFor(x => x.Type)
            .IsInEnum()
            .NotEqual(SiiRequestType.Unknown)
            .WithMessage("Invalid request type");
        RuleFor(x => x.Args)
            .NotEmpty()
            .WithMessage("No arguments provided")
            .Must(x => x.ContainsKey("filePath"))
            .WithMessage("No file path provided")
            .Must(ExistFile)
            .WithMessage("File does not exist");
    }

    private static bool ExistFile(IReadOnlyDictionary<string, object> x)
    {
        try
        {
            var filePath = x["filePath"].ToString() ?? string.Empty;
            return File.Exists(filePath);
        }
        catch (Exception)
        {
            return false;
        }
    }
}
