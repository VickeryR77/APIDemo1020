using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularAPIWalkthrough.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularAPIWalkthrough.Controllers
{
    //We'll never put controller in here in URL.
    //It just needs to be there for vs stuff.
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {

        //URL Path: /api/Employees
        //We use these to feed JSON to Angular.
        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            return Employee.Emps;
        }

        [HttpGet("{id}")]
        public Employee GetSingle(long id)
        {
            return Employee.findById(id);
        }
        
        [HttpPost]
        public Employee Save([FromForm] Employee emp)
        {
            return Employee.Update(emp);
        }
    }
}
