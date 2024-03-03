
using Serilog;
using SIIDecryptSharp;
using System.Text;
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
                    var result = Encoding.UTF8.GetString(decrypted);
                    var lines = result.Split("\r\n").ToArray();

                    return Successful(id, lines);
                });

            return result;
        }
        catch (Exception ex)
        {
            return Task.FromResult(GeneralFailure(id, ex.Message));
        }
    }
}
