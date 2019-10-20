class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}
let myBook = new Book('The Story of Tau', 'Will Alexander', 250);
let mySecondBook = new Book ('The Second Story of Tau', 'Will Alexander', 310);

//see the output 
console.log (myBook);
console.log(mySecondBook);