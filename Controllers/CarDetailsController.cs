using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using RestSharp;
using System.Text.Json;

namespace reimagined_lamp.Controllers
{
    [ApiController]
    [Route("cardetails")]
    public class CarDetailsController : ControllerBase
    {
        private readonly ILogger<CarDetailsController> _logger;

        public CarDetailsController(ILogger<CarDetailsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public CarDetails Get() {
            return getCarDetails("");
        }
        
        [HttpGet("{id}")]
        public CarDetails Get(String id) {
            return getCarDetails(id);
        }

        public CarDetails getCarDetails(String reg){
            var client = new RestClient("https://beta.check-mot.service.gov.uk/");
            var request = new RestRequest("/trade/vehicles/mot-tests?registration=" + reg);
            request.AddHeader("Accept", "application/json+v6");
            request.AddHeader("x-api-key", "fZi8YcjrZN1cGkQeZP7Uaa4rTxua8HovaswPuIno");
            var response = client.Get(request);
            var responseData = JsonSerializer.Deserialize<List<CarDetails>>(response.Content);
            return responseData[0];
        }
    }
}
