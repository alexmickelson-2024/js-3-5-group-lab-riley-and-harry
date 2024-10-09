import { bookList } from "./books.js";



const filterText = document.getElementById("filterInput")
filterText.addEventListener("input", (typedText)=> {
    console.log(typedText)
})


const drawBooks = (books) => {
  const generateBookNodes = (book) => {
    const tableRowNode = document.createElement("tr")
    const tableDataTitle = document.createElement("td")
    const tableDataAuthor = document.createElement("td")
    const tableDataSummary = document.createElement("td")
    tableDataTitle.textContent = `${book.title}`
    tableDataAuthor.textContent = `${book.author}`
    tableDataSummary.textContent = `${book.summary}`
    tableRowNode.replaceChildren(tableDataTitle,tableDataAuthor,tableDataSummary)
    tableRowNode.addEventListener("click", (click) => {
      document.getElementById("selectedBookTitle").textContent = `${tableDataTitle.textContent}`
    })
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