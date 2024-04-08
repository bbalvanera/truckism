using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Truckism.Helper.Commands;

namespace Truckism.Helper.Tests.Commands;

[TestClass]
public class GetSiiFileCommandTests
{
    [TestMethod]
    public async Task Should_Return_DecryptedTempFile()
    {
        // Arrange
        var id = "MYId";
        var args = new ReadOnlyDictionary<string, object>(new Dictionary<string, object>
        {
            { "filePath", "D:\\OneDrive\\Documents\\American Truck Simulator\\profiles\\4D756C7469706C61796572\\save\\autosave\\game.sii" }
        });

        var subject = new GetSiiFileCommand();

        // Act
        var sw = new Stopwatch();
        sw.Start();
        var result = await subject.Execute(id, args);
        sw.Stop();

        Console.WriteLine($"Elapsed={sw.ElapsedMilliseconds}ms");
        // Assert
        Console.WriteLine(result.Result);
        Assert.IsTrue(result.Success);
        Assert.IsTrue(File.Exists(result.Result));

        // cleanup
        File.Delete(result.Result);
    }
}
