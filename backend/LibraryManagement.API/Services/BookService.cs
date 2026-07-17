using LibraryManagement.API.Models;

namespace LibraryManagement.Api.Services;

public class BookService
{
    private readonly List<Book> _books =
    [
        new Book
        {
            Id = 1,
            Title = "Clean Code",
            Author = "Robert C. Martin",
            Status = "Available"
        },

        new Book
        {
            Id = 2,
            Title = "Domain-Driven Design",
            Author = "Eric Evans",
            Status = "Borrowed"
        },

        new Book
        {
            Id = 3,
            Title = "The Pragmatic Programmer",
            Author = "Andy Hunt",
            Status = "Available"
        }
    ];

    public List<Book> GetAll()
    {
        return _books;
    }
}