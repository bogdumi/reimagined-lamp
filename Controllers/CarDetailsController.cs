using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

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
        public CarDetails Get()
        {
            return new CarDetails
            {
                Make = "Test",
                Model = "Test",
                Colour = "Test",
                ExpiryDate = DateTime.Now,
                MilageAtLastMOT = 0
            };
        }
    }
}
