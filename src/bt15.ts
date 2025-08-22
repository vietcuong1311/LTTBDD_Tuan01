import { Book } from "./bt6";
import { User } from "./bt7";

export class Library {
    books: Book[] = [];
    users: User[] = [];

    addBook(book: Book){ 
        this.books.push(book); 
    }
    addUser(user: User){ 
        this.users.push(user); 
    }
}