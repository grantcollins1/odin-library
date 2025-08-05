const myLibrary = [];

function Book(author, title, numPages, read) {
  this.id = crypto.randomUUID();
  this.author = author;
  this.numPages = numPages;
  this.title = title;
  this.read = read;
}

function addBooktoLibrary(author, title, numPages, read) {
  const book = new Book(author, title, numPages, read);
  myLibrary.push(book);
}

function addBook(bookGrid, book) {
  const bookContainer = document.createElement("div");
    const titleDisplay = document.createElement("p");
    titleDisplay.textContent = "Title: " + book.title;
    bookContainer.appendChild(titleDisplay);
    const authorDisplay = document.createElement("p");
    authorDisplay.textContent = "Author: " + book.author;
    bookContainer.appendChild(authorDisplay);
    const pageNumDisplay = document.createElement("p");
    pageNumDisplay.textContent = "Number of Pages: " + book.numPages;
    bookContainer.appendChild(pageNumDisplay);
    const readDisplay = document.createElement("p");
    readDisplay.textContent = book.read ? "Has been read" : "Has not been read";
    bookContainer.appendChild(readDisplay);
    bookGrid.appendChild(bookContainer);
}
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const title = formData.get('title');
  const author = formData.get('author');
  const numPages = formData.get('pages');
  const read = (formData.get('read') === 'on');
  addBooktoLibrary(author, title, pages, read);
}

function displayBooks() {
  const bookGrid = document.body.querySelector(".book-grid");
  myLibrary.map((book) => {
    addBook(bookGrid, book);
  })
}
addBooktoLibrary("Grant", "To Kill a Mockingbird", 357, false);
addBooktoLibrary("Jason", "Cookbook", 10, true);
addBooktoLibrary("Ben", "Recipes", 150, true);
displayBooks();

const addBookButton = document.body.querySelector(".new-book");
const dialog = document.body.querySelector("dialog");
const closeModalButton = document.body.querySelector("dialog .close");
const bookForm = document.body.querySelector("dialog form");
bookForm.addEventListener("submit", (event) => handleSubmit(event));
addBookButton.addEventListener("click", () => dialog.showModal());
closeModalButton.addEventListener("click", () => dialog.close());
