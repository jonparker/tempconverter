using System;

namespace TempConverterAPI.Models
{
    public class Temperature
    {
        public double TemperatureC { get; set; }

        public double TemperatureF => 32 +  (TemperatureC / 0.5556);
    }
}