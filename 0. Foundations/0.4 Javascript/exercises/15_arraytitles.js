const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]

function getBookTitles(books) {
  return books.map(book => book.title);
}
console.log(getBookTitles(books));