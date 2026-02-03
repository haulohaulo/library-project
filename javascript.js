let container = document.querySelector(".container");
const addButton = document.querySelector(".addBook");
const closeButton = document.querySelector(".close");
const dialog = document.querySelector("dialog");
const form = document.getElementById("myForm");
const deleteButtons = document.querySelectorAll(".delete");
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

Book.prototype.read = function() {
  this.readOrNot = "read";
}

function addBookToLibrary(title, author, pages, readOrNot) {
  const newBook = new Book(title, author, pages, readOrNot);
  myLibrary.push(newBook);
  console.log(myLibrary);
  displayNewBook();
}

function displayNewBook() {
  
  let bookDisplay = document.createElement("div");
  var newBook  = myLibrary[myLibrary.length - 1];
  bookDisplay.className = "card";
  bookDisplay.dataset.id = newBook.id;
  container.appendChild(bookDisplay);

  let textContainer = document.createElement("div");
  textContainer.className = "text-container";
  bookDisplay.appendChild(textContainer);
  textContainer.textContent = newBook.title + ` ` + newBook.author + ` ` + newBook.pages + ` ` + newBook.readOrNot; 

  let read = document.createElement("button");
  read.className = "read-button";
  read.textContent = "Read";
  bookDisplay.appendChild(read);

  let removeButton = document.createElement("button");
  removeButton.className = "delete";
  removeButton.textContent = "Delete";
  bookDisplay.appendChild(removeButton);
}



window.addEventListener("DOMContentLoaded", (event) => {
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

  document.querySelectorAll(".delete").forEach((button) => {
    button.addEventListener('click', () => {
      console.log("delete clicked");
      const bookID = button.parentElement.dataset.id;
      button.parentElement.remove();
      
      
      for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].id == bookID) {
          myLibrary.splice(i, 1);
          console.log(myLibrary);
        }
      }
    })
  })

  document.querySelectorAll(".read-button").forEach(button => {
    button.addEventListener('click', () => {
      console.log("read clicked");
      const bookContainer = button.parentElement;
      const bookID = button.parentElement.dataset.id;
      for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].id == bookID) {
          myLibrary[i].read();
          console.log(myLibrary[i]);
          document.querySelector(`[data-id="${bookID}"] .text-container`).textContent = "read";
        }
      }
    })
  })

})





addBookToLibrary('title1', 'author1', 'pages1', 'read')
addBookToLibrary('title2', 'author2', 'pages2', 'not read')
addBookToLibrary('title3', 'author3', 'pages3', 'not read')



