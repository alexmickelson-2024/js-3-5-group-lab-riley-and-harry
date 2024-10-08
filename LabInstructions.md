# JS Lab Instructions

## Part 1: Refactor book html generation

Currently we are adding elements to the DOM by updating the `innerHTML` attribute with strings. This has worked so far, but it has some limitations. We cannot attach event listeners to the elements we just created.

1. Refactor `drawBooks` to not use the `innerHTML` attribute, instead use the [createElement](https://www.w3schools.com/jsref/met_document_createelement.asp) function with the `appendChild` function
2. Update `drawBooks` to attach a listener to the click event of the `tr` before it is appended to the DOM. This listener should replace the contents of the `id="selectedBookTitle"` with the title of the book selected

## Part2: Filter

- allow the user to type into the filter input and change the list of books being displayed
   - do this by attaching a listener to the `change` event of the input
   - this should be a case-insensitive comparison with any substring of the title, author or summary.
- make sure your click listeners are still working after filtering
