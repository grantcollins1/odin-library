const p = document.createElement("p");
p.textContent = "hello";
document.body.appendChild(p);

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