let textContainer = document.querySelector(".container")

const myLibrary = [];

function Book(title, author, pages, readOrNot) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readOrNot = readOrNot;
    this.id = crypto.randomUUID();
    this.info = function() {
      console.log(this.title + ", " + this.author + ", " + this.pages + ", " + this.readOrNot)
    };
}

function addBookToLibrary(title, author, pages, readOrNot) {
  
  const newBook = new Book(title, author, pages, readOrNot);
  myLibrary.push(newBook);
}


function displayBooks() {
  for (book in myLibrary) {
    let bookDisplay = document.createElement("div");
    bookDisplay.className = "card";
    textContainer.appendChild(bookDisplay);
  }
}

addBookToLibrary('title1', 'author1', 'pages1', 'read')
addBookToLibrary('title2', 'author2', 'pages2', 'not read')
addBookToLibrary('title3', 'author3', 'pages3', 'not read')


displayBooks();