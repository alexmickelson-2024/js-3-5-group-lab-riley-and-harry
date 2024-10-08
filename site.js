import { bookList } from "./books.js";






const drawBooks = (books) => {
  // const bookHTML = (book) =>
  //    `
  //   <tr>
  //     <td>${book.title}</td>
  //     <td>${book.author}</td>
  //     <td>${book.summary}</td>
  //   </tr>
  // `
  const generateBookNodes = (book) => {
    const tableRowNode = document.createElement("tr")
    const tableDataTitle = document.createElement("td")
    const tableDataAuthor = document.createElement("td")
    const tableDataSummary = document.createElement("td")
    tableDataTitle.textContent = `${book.title}`
    tableDataAuthor.textContent = `${book.author}`
    tableDataSummary.textContent = `${book.summary}`
    tableRowNode.replaceChildren(tableDataTitle,tableDataAuthor,tableDataSummary)
    return tableRowNode;
  }
  const tableBodyElement = document.getElementById("myTableBody")
  tableBodyElement.replaceChildren();

  books.forEach(book => {
    const BookNode = generateBookNodes(book)
    tableBodyElement.appendChild(BookNode);
  })
}

drawBooks(bookList);
