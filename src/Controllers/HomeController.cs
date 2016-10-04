using Microsoft.AspNetCore.Mvc;

namespace Angular2NETStarter.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
