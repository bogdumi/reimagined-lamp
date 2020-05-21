using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using RestSharp;

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
        public String Get()
        {
            return getCarDetails("XX10ABC");
        }

        public String getCarDetails(String reg){
            var client = new RestClient("https://beta.check-mot.service.gov.uk/");
            var request = new RestRequest("/trade/vehicles/mot-tests?registration=" + reg);
            request.AddHeader("Accept", "application/json+v6");
            request.AddHeader("x-api-key", "fZi8YcjrZN1cGkQeZP7Uaa4rTxua8HovaswPuIno");
            var response = client.Get(request);
            var content = response.Content; // Raw content as string
            return content;
            // return new CarDetails{
            //     Make = response.Content.make,
            //     Model = response.Content.model,
            //     Colour = ,
            //     ExpiryDate = ,
            //     MilageAtLastMOT = 
            // };
        }
    }
}
