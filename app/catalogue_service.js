// eslint-disable-next-line no-unused-vars
const catalogue = [
  "The Catcher in the Rye by J.D.Salinger",
  "Dracula by Bram Stoker",
  "Between the Assassinations by Aravind Adiga",
  "Wolf Hall by Hilary Mantel",
  "Bring Up The Bodies by Hilary Mantel",
  "A Place of Greater Safety by Hilary Mantel",
  "Giving Up the Ghost by Hilary Mantel",
  "The Assassination of Margaret Thatcher by Hilary Mantel",
  "The Yellow Wallpaper by Charlotte Perkins Gilman",
  "Conversations With Friends by Sally Rooney",
  "Normal People by Sally Rooney",
  "Everything I Never Told You by Celeste Ng",
  "2666 by Robert Bolaño",
  "By Night In Chile by Robert Bolaño",
  "A Tale of Two Cities by Charles Dickens",
  "Oliver Twist by Charles Dickens",
  "Great Expectations by Charles Dickens",
  "The Blind Assassin by Margaret Atwood",
  "Why Be Happy When You Could Be Normal ? by Jeanette Winterson",
  "The Origin of Species by Charles Darwin"
];
function countBooks() {
  // Your code here
  return catalogue.length
}
function checkBook(book) {
  // Your code here
  for (let i = 0; i < catalogue.length; i++) {
    if (catalogue[i] === book) {
      return true
    }
  } return false
}
function countBooksByFirstLetter(letter) {
  let count = 0
  for (let i = 0; i < catalogue.length; i++) {
    let word = catalogue[i]
    if (word.charAt(0).toUpperCase() === letter.toUpperCase()) {
      count++
    }
    // console.log(word.charAt(0))
  }
  return count
}



function countBooksByKeyword(keyword) {
  // Your code here
  let count = 0
  if (typeof (keyword) === "string") {
    for (let i = 0; i < catalogue.length; i++) {
      let string = catalogue[i].toUpperCase();
      if (string.includes(keyword.toUpperCase())) {
        count++
      }
    }
    return count
  } else {
    return "This is not valid";
  }
}



function getBooksByAuthor(author) {
  // Your code here
  let bookAuthor = [];
  for (let i = 0; i < catalogue.length; i++) {
    let string = catalogue[i];
    if (string.includes(author)) {
      bookAuthor.push(string);
    }
  }
  return bookAuthor;
}


module.exports = {
  countBooks,
  checkBook,
  countBooksByFirstLetter,
  countBooksByKeyword,
  getBooksByAuthor
};