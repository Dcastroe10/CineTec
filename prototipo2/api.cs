using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class MiControlador : ControllerBase
{
    [HttpPost]
    public IActionResult RecibirPelicula([FromBody] Pelicula pelicula)
    {
        return Ok("POST request recibido correctamente");
    }
}

public class Pelicula 
{
    public string nombreOriginal {get; set;}
    public string nombreComercial {get; set;}
    public string duracion {get; set;}
    public string protagonista {get; set;}
    public string clasificacion {get; set;}
    public string director {get; set;}
}