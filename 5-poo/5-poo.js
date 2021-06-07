"use strict";
class Author {
    constructor(){
        this.name = "";
        this.books = [];
        addBook();{
            this.books.push(book)
        };
    }
}
class Book {
    constructor() {
        this.title = "";
        this.price = 0.0;
    
        this.author = Author;
    }
        setAuthor(Author) {
            if (!this.books.includes(book)) {
                addBook(book)
    
                
            }
    
            return this;
        
    }};

    


    let book1 = new Book();
    book1.title = "Le Seigneur des Anneaux";
    
    let book2 = new Book();
    book2.title = "Le Silmarillon";
    
   // let author = new Author();
  //  author.name = "Tolkien";
    
    book1.setAuthor(author);
    book2.setAuthor(author);
    
    
    console.log(author);