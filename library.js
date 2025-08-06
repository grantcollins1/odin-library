let myLibrary = [];

function Book(author, title, numPages, read) {
  this.id = crypto.randomUUID();
  this.author = author;
  this.numPages = numPages;
  this.title = title;
  this.read = read;
}

Book.prototype.toggleRead = function() {
  const bookToUpdate = document.getElementById(this.id);
  this.read = !this.read;
  const readDisplay = bookToUpdate.querySelector('.read-display');
  readDisplay.textContent = this.read ? "Has been read" : "Has not been read";
}

function addBookToLibrary(author, title, numPages, read) {
  const book = new Book(author, title, numPages, read);
  myLibrary.push(book);
  addBook(book);
}

function deleteBook(id) {
  const bookToDelete = document.getElementById(id);
  bookToDelete.remove();
  myLibrary = myLibrary.filter((book) => book.id !== id);
}

function addBook(book) {
  const bookGrid = document.body.querySelector(".book-grid");
  const bookContainer = document.createElement("div");
  const deleteButton = document.createElement("button");
  deleteButton.classList.add('delete');
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => deleteBook(book.id));
  bookContainer.appendChild(deleteButton);
  bookContainer.setAttribute("id", book.id);
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
  readDisplay.classList.add('read-display');
  readDisplay.textContent = book.read ? "Has been read" : "Has not been read";
  bookContainer.appendChild(readDisplay);
  const readButton = document.createElement("button");
  readButton.textContent = "Toggle Read";
  readButton.classList.add('read');
  readButton.addEventListener("click", () => book.toggleRead());
  bookContainer.appendChild(readButton);
  bookGrid.appendChild(bookContainer);
}
function handleSubmit(event, bookForm, dialog) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const title = formData.get('title');
  const author = formData.get('author');
  const numPages = formData.get('pages');
  const read = (formData.get('read') === 'on');
  addBookToLibrary(title, author, numPages, read);
  bookForm.reset();
  dialog.close();
}

addBookToLibrary("Grant", "To Kill a Mockingbird", 357, false);
addBookToLibrary("Jason", "Cookbook", 10, true);
addBookToLibrary("Ben", "Recipes", 150, true);

const addBookButton = document.body.querySelector(".new-book");
const dialog = document.body.querySelector("dialog");
const closeModalButton = document.body.querySelector("dialog .close");
const bookForm = document.body.querySelector("dialog form");
bookForm.addEventListener("submit", (event) => handleSubmit(event, bookForm, dialog));
addBookButton.addEventListener("click", () => dialog.showModal());
closeModalButton.addEventListener("click", () => dialog.close());
