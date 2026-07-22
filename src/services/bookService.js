const API_URL = "https://localhost:7222/api/books";

export async function getBooks() {

    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to load books");
    }

    return await response.json();
}

export async function addBook(book) {

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    });


    if (!response.ok) {
        throw new Error("Failed to add book");
    }

    return await response.json();
}

export async function deleteBook(id) {

    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });


    if (!response.ok) {
        throw new Error("Failed to delete book");
    }

}

export async function updateBook(book) {

    const response = await fetch(
        `${API_URL}/${book.id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(book)
        }
    );


    if (!response.ok) {
        throw new Error("Failed to update book");
    }


    return await response.json();
}