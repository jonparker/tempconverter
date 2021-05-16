using Microsoft.AspNetCore.Mvc;
using TempConverterAPI.Models;

namespace TempConverterAPI.Controllers
{
    [ApiController]
    [Route("Convert")]
    public class TemperatureConverter : Controller
    {
        // GET
        [HttpPost]
        public ConversionResponse Index([FromBody] ConversionRequest request)
        {
            return new(request);
        }
    }
}