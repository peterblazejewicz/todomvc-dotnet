using Microsoft.AspNetCore.Mvc;
using TodoMvcDotnet.Service.Models;
using System.Linq;

namespace TodoMvcDotnet.Service.Controllers
{
    [Route("api/[controller]")]
    public class TodosController : Controller
    {

        public TodosContext DbContext { get; set; } = new TodosContext();

        // GET api/todos
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(DbContext.Todos);
        }

        // GET api/todos/5
        [HttpGet("{id:int}", Name = "GetTodo")]
        public IActionResult Get(int id)
        {
            var query = from t in DbContext.Todos
                        where t.Id == id
                        select t;
            Todo todo = query.FirstOrDefault<Todo>();
            if (todo != null)
            {
                return Ok(todo);
            }
            return NotFound();
        }

        // POST api/todos
        [HttpPost(Name = "CreateTodo")]
        public IActionResult Post([FromBody] Todo todo)
        {
            if (ModelState.IsValid == false)
            {
                return BadRequest(ModelState);
            }
            DbContext.Add(todo);
            var added = DbContext.SaveChanges();
            return Created($"api/todos/{todo.Id}", todo);
        }

        // PUT api/todos/5
        [HttpPut("{id:int}", Name = "UpdateTodo")]
        public IActionResult Put(int id, [FromBody] Todo todo)
        {
            if (ModelState.IsValid == false)
            {
                return BadRequest(ModelState);
            }
            if (todo.Id == 0)
            {
                return BadRequest();
            }
            DbContext.Update(todo);
            DbContext.SaveChanges();
            return NoContent();
        }

        // DELETE api/todos/5
        [HttpDelete("{id:int}", Name = "DeleteTodo")]
        public IActionResult Delete(int id)
        {
            var query = from t in DbContext.Todos
                        where t.Id == id
                        select t;
            Todo todo = query.FirstOrDefault<Todo>();
            if (todo == null)
            {
                return NotFound();
            }
            DbContext.Remove(todo);
            DbContext.SaveChanges();
            return NoContent();
        }
    }
}
