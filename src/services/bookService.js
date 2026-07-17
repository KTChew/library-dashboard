const API_URL = "https://localhost:7222/api/books";

export async function getBooks() {

    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to load books");
    }

    return await response.json();
}
