namespace TempConverterAPI.Models
{
    public class ConversionRequest
    {
        public UnitOfMeasurement Unit { get; set; }
        public decimal Value { get; set; }
    }
}