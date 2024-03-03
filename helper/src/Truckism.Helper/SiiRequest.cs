namespace Truckism.Helper;

public class SiiRequest
{
    public string Id { get; set; } = string.Empty;
    public SiiRequestType Type { get; set; }
    public IReadOnlyDictionary<string, object> Args { get; set; } = new Dictionary<string, object>();

    public void Deconstruct(out string id, out SiiRequestType type, out IReadOnlyDictionary<string, object> args)
    {
        id = Id;
        type = Type;
        args = Args;
    }
}
