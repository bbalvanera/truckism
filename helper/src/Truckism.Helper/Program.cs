
using FluentValidation.Results;
using Newtonsoft.Json;
using Serilog;
using Truckism.Helper;
using Truckism.Helper.Commands;
using static Truckism.Helper.SiiCommandResult;

#if DEBUG
    ConfigureLogging();
#endif

while (true)
{
    var input = await Console.In.ReadLineAsync();

    if (input?.ToLower() == "exit")
        break;

    await ProcessInput(input);
}

static async Task ProcessInput(string? input)
{
    var validation = IsValidRequest(input, out var request);
    if (!validation.IsValid)
    {
        var errorMessage = validation.Errors[0].ErrorMessage;
        var result = BadRequest(request.Id, errorMessage);

        await Console.Out.WriteAsync(result.ToJson());

        return;
    }

    var (id, type, args) = request!;

    try
    {
        var command = GetCommand(type);
        var result = await command.Execute(id, args);

        await Console.Out.WriteAsync(result.ToJson());
    }
    catch (Exception ex)
    {
        var result = GeneralFailure(id, $"{ex.Message} {ex.InnerException?.Message}");

        await Console.Error.WriteAsync(result.ToJson());
    }
}

static ValidationResult IsValidRequest(string? input, out SiiRequest request)
{
    request = DeserializeInput(input) ?? new SiiRequest();

    var validator = new SiiRequestValidator();
    var result = validator.Validate(request);

    return result;
}

static SiiRequest? DeserializeInput(string? input)
{
    try
    {
        var result = JsonConvert.DeserializeObject<SiiRequest>(input ?? string.Empty);
        return result;
    }

    catch (JsonException ex) when (ex is JsonReaderException or JsonSerializationException)
    {
        return null;
    }
}

static ISiiCommand GetCommand(SiiRequestType commandType)
{
    return commandType switch
    {
        SiiRequestType.GetSiiFile => new GetSiiFileCommand(),
        _ => throw new NotImplementedException()
    };
}

void ConfigureLogging()
{
    if (args.Length == 0)
        return;
        
    Log.Logger = new LoggerConfiguration()
        .MinimumLevel.Debug()
        .WriteTo.Console()
        .CreateLogger();
}
