using SIIDecryptSharp;
using static Truckism.Helper.SiiCommandResult;

namespace Truckism.Helper.Commands;

public class GetSiiFileCommand() : ISiiCommand
{
    public Task<SiiCommandResult> Execute(string id, IReadOnlyDictionary<string, object> args)
    {
        try
        {
            var filepath = args["filePath"] as string;
            var result = Task.Run(
                () =>
                {
                    var decrypted = Decryptor.Decrypt(filepath);
                    var temp = Path.GetTempFileName();
                    using (var file = File.Create(temp))
                        file.Write(decrypted, 0, decrypted.Length);

                    return Successful(id, temp);
                });

            return result;
        }
        catch (Exception ex)
        {
            return Task.FromResult(GeneralFailure(id, ex.Message));
        }
    }
}
