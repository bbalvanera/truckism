namespace Truckism.Helper.Commands;

public interface ISiiCommand
{
    Task<SiiCommandResult> Execute(string id, IReadOnlyDictionary<string, object> args);
}
