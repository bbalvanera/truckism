using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Truckism.Helper;

public class SiiCommandResult
{
    private readonly JsonSerializerSettings settings = new()
    {
        ContractResolver = new CamelCasePropertyNamesContractResolver()
    };

    public string Id { get; set; } = string.Empty;
    public bool Success { get; set; }
    public string? ErrorType { get; set; }
    public string? ErrorDescription { get; set; }
    public dynamic? Result { get; set; }

    public string ToJson() => JsonConvert.SerializeObject(this, settings);

    internal static SiiCommandResult Successful(string id, dynamic result) => new()
    {
        Id = id,
        Success = true,
        Result = result
    };

    internal static SiiCommandResult GeneralFailure(string id, string description = "No description available") => new()
    {
        Id = id,
        Success = false,
        ErrorType = "General_Failure",
        ErrorDescription = description
    };

    internal static SiiCommandResult BadRequest(string id, string description = "No description available") => new()
    {
        Id = id,
        Success = false,
        ErrorType = "Bad_Request",
        ErrorDescription = description
    };

    internal static SiiCommandResult InvalidArgument(string id) => new()
    {
        Id = id,
        Success = false,
        ErrorType = "Invalid_Argument",
        ErrorDescription = "Invalid argument provided"
    };

    internal static SiiCommandResult FileAccessError(string id, string description = "No description available") => new()
    {
        Id = id,
        Success = false,
        ErrorType = "File_Access_Error",
        ErrorDescription = description
    };

    internal static SiiCommandResult NotAnSiiFile(string id) => new()
    {
        Id = id,
        Success = false,
        ErrorType = "Not_An_Sii_File",
        ErrorDescription = "Provided file is not an SII file"
    };
}
