const myLibrary = [];
console.log(myLibrary);

//book constructor
function Book(title,author,pages,fiction) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.fiction= fiction;

}

function addBookToLibrary(title,author,pages,fiction){
let newBook = new Book(title,author,pages,fiction);
myLibrary.push(newBook);
//add book object into array
}

addBookToLibrary("The Hobbit","J.R.R. Tolkien",295,true);
addBookToLibrary("1984", "George Orwell", 328, true);  
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);  
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 277, true);  
addBookToLibrary("A Brief History of Time", "Stephen Hawking", 256, false);  
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);  
addBookToLibrary("The Art of War", "Sun Tzu", 273, false);  
addBookToLibrary("Sapiens: A Brief History of Humankind", "Yuval Noah Harari", 443, false);  
addBookToLibrary("Dune", "Frank Herbert", 412, true);  
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, true);  
addBookToLibrary("The Selfish Gene", "Richard Dawkins", 360, false);  

const body = document.querySelector("body");
const bookSection = document.getElementById("book-section");
function displayBooks(array) {

    array.forEach(element => {

        const card = document.createElement("div");
        card.className = "card";
        const title = document.createElement("h2");
        title.innerHTML = element.title;
        const author = document.createElement("h3");
        author.innerHTML = element.author;
        const pages = document.createElement("p");
        pages.innerHTML = `Number of pages: ${element.pages}`;
        const status= document.createElement("p");
        
        if(element.fiction){
            status.innerHTML = `The following book is fiction`;
        }
        else{
        status.innerHTML = `The following book is not fiction`;
        }
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(status);
        bookSection.appendChild(card);
    });
    
}
displayBooks(myLibrary)
console.log(myLibrary);