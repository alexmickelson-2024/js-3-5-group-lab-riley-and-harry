import { bookList } from "./books.js";


const drawBooks = (books) => {
  const bookHTML = (book) => `
    <tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.summary}</td>
    </tr>
  `

  const tableBodyElement = document.getElementById("myTableBody")
  tableBodyElement.innerHTML = "";

  books.forEach(book => {
    const firstBookHtml = bookHTML(book)
    tableBodyElement.innerHTML += firstBookHtml;
  })
}

drawBooks(bookList);
