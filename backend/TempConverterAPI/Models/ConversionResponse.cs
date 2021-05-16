namespace TempConverterAPI.Models
{
    public class ConversionResponse
    {
        public decimal Celsius { get; set; }
        public decimal Fahrenheit { get; set; }

        public ConversionResponse(ConversionRequest request)
        {
            this.Celsius = request.Unit == UnitOfMeasurement.Celsius ? request.Value : ConvertToCelsius(request.Value);
            this.Fahrenheit = request.Unit == UnitOfMeasurement.Fahrenheit
                ? request.Value
                : ConvertToFahrenheit(request.Value);
        }
        
        private static decimal ConvertToFahrenheit(decimal value) => 32m + value * (9m/5m);
        private static decimal ConvertToCelsius(decimal value) => (value - 32m) * (5m/9m);

    }
}