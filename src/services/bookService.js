const STORAGE_KEY = "library_books";

export function getBooks(initialBooks) {

    const stored = localStorage.getItem(STORAGE_KEY);

    return stored
        ? JSON.parse(stored)
        : initialBooks;
}

export function saveBooks(books) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(books)
    );
}