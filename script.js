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
// addBookToLibrary("The Art of War", "Sun Tzu", 273, false);  
// addBookToLibrary("Sapiens: A Brief History of Humankind", "Yuval Noah Harari", 443, false);  
// addBookToLibrary("Dune", "Frank Herbert", 412, true);  
// addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, true);  
// addBookToLibrary("The Selfish Gene", "Richard Dawkins", 360, false);  

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
        const status= document.createElement("button");
        status.className = "readingStatus";
        const closeButton = document.createElement("button");
        closeButton.innerHTML = "&times;";
        closeButton.className = "close-btn";

        if(element.fiction === true){
            status.innerHTML = `Read`;
            status.style.backgroundColor = "green";
        }
        else{
        status.innerHTML = `Not Read`;
        status.style.backgroundColor = "red";
        }

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(status);
        card.appendChild(closeButton);
        bookSection.appendChild(card);
    });

    const closeButtons = document.querySelectorAll(".close-btn");
closeButtons.forEach((button)=>{
    button.addEventListener("click",function () 
    {
        const card = button.closest(".card");
        
        const bookIndex = myLibrary.findIndex( item => item.title === card.firstChild.innerHTML);
        if(bookIndex!==-1){
           
                myLibrary.splice(bookIndex,1);
            
        }
        
        card.remove();
    })

})

const readingStatusButtons = document.querySelectorAll(".readingStatus");
readingStatusButtons.forEach((button)=>{

    button.addEventListener("click", function () {
        
        console.log(button.innerHTML);
        if( button.innerHTML == `Read`){
        
            button.innerHTML = `Not Read`;
            button.style.backgroundColor = "red";

            const card = button.closest(".card");
            myLibrary.filter((item)=>{

                if (item.title === card.firstChild.innerHTML){
                
                    item.fiction = false;
                }
            })
        }

        else{
            button.innerHTML = `Read`;
            button.style.backgroundColor = "green";

            const card = button.closest(".card");
            myLibrary.filter((item)=>{

                if (item.title === card.firstChild.innerHTML){
                
                    item.fiction = true;
                }
            })
            
        }

        
    })
    
    
})
    
}
displayBooks(myLibrary)

const newBookButton = document.getElementById("new-book");
const formDialog = document.getElementById("form-dialog");
newBookButton.addEventListener("click",function() {
    console.log(myLibrary);

    if(formDialog.open){
        formDialog.close();
    }
    else{
    formDialog.show();
    }
    
})

const submitForm = document.getElementById("new-book-form");

submitForm.addEventListener("submit", function (event) {

    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries())
    console.log(data);
    addBookToLibrary(data.title,data.author,Number(data.pages),Boolean(data.readStatus));
    formDialog.close();
    bookSection.innerHTML = "";
    displayBooks(myLibrary)
    
})

