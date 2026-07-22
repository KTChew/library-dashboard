using LibraryManagement.API.Data;
using LibraryManagement.API.Models;
using Microsoft.EntityFrameworkCore;

namespace LibraryManagement.Api.Services;


public class BookService
{
    private readonly LibraryDbContext _context;

    public BookService(LibraryDbContext context)
    {
        _context = context;
    }

    public List<Book> GetAll()
    {
        return _context.Books.ToList();
    }

    public Book? GetById(int id)
    {
        return _context.Books
            .FirstOrDefault(x => x.Id == id);
    }
   
    public void Add(Book book)
    {
        _context.Books.Add(book);
        _context.SaveChanges();
    }

    public Book Update(Book book)
    {
        _context.Books.Update(book);
        _context.SaveChanges();

        return book;
    }

    public void Delete(int id)
    {
        var book = _context.Books
            .FirstOrDefault(x => x.Id == id);

        if (book != null)
        {
            _context.Books.Remove(book);
            _context.SaveChanges();
        }
    }

}