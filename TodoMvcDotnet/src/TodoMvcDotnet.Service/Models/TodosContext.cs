using Microsoft.EntityFrameworkCore;

namespace TodoMvcDotnet.Service.Models
{
    public class TodosContext : DbContext
    {
        public DbSet<Todo> Todos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=todos.db",
                b => b.MigrationsAssembly("TodoMvcDotnet.Client"));
        }
    }
}
