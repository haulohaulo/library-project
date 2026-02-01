let textContainer = document.querySelector(".container")
const addButton = document.querySelector(".addBook")
const closeButton = document.querySelector(".close")
const dialog = document.querySelector("dialog")
const form = document.getElementById("myForm");
const myLibrary = [];

addButton.addEventListener("click", () => {
  dialog.showModal();
})

closeButton.addEventListener("click", () => {
  dialog.close();
})

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = form.title.value;
  const author = form.author.value;
  const pages = form.pages.value;
  const readOrNot = form.readOrNot.value;
  
  addBookToLibrary(title, author, pages, readOrNot);
 
});

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
  displayNewBook();
}

function displayNewBook() {
  let bookDisplay = document.createElement("div");
  bookDisplay.className = "card";
  textContainer.appendChild(bookDisplay);
  var newBook  = myLibrary[myLibrary.length - 1];
  bookDisplay.textContent = newBook.title + ` ` + newBook.author + ` ` + newBook.pages + ` ` + newBook.readOrNot; 
}



addBookToLibrary('title1', 'author1', 'pages1', 'read')
addBookToLibrary('title2', 'author2', 'pages2', 'not read')
addBookToLibrary('title3', 'author3', 'pages3', 'not read')



