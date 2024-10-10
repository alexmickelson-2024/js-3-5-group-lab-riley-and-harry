import { bookList } from "./books.js";



const filterText = document.getElementById("filterInput")
filterText.addEventListener("input", () => {
  drawBooks(bookList, filterText.value);
})


const drawBooks = (books, filterTextContent) => {
  const generateBookNodes = (book) => {
    const tableRowNode = document.createElement("tr")
    const tableDataTitle = document.createElement("td")
    const tableDataAuthor = document.createElement("td")
    const tableDataSummary = document.createElement("td")
    tableDataTitle.classList.add("title")
    tableDataAuthor.classList.add("author")
    tableDataSummary.classList.add("sumarry")
    tableDataTitle.textContent = book.title
    tableDataAuthor.textContent = book.author
    tableDataSummary.textContent = book.summary
    tableRowNode.replaceChildren(tableDataTitle, tableDataAuthor, tableDataSummary)
    tableRowNode.addEventListener("click", (click) => {
      document.getElementById("selectedBookTitle").textContent = tableDataTitle.textContent
    })

    return tableRowNode;
  }
  const tableBodyElement = document.getElementById("myTableBody")
  tableBodyElement.replaceChildren();

  books.forEach(book => {
    const BookNode = generateBookNodes(book)
    if (BookNode.getElementsByTagName("td")[0].textContent.includes(filterTextContent)
          || BookNode.getElementsByTagName("td")[1].textContent.includes(filterTextContent) 
          || BookNode.getElementsByTagName("td")[2].textContent.includes(filterTextContent)) {
      tableBodyElement.appendChild(BookNode);
    }
  })

}

drawBooks(bookList, "");