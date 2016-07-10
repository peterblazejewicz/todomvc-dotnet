using System.ComponentModel.DataAnnotations;

namespace TodoMvcDotnet.Service.Models
{
    public class Todo
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        public bool Complete { get; set; }
    }
}
