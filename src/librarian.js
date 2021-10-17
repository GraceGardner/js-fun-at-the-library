class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(name, morning) {
    if (morning){
      return `Good morning, ${name}!`
    } else {
    return `Hello, ${name}!`
    }
  }

  findBook(book){

    var booksAvailable = [].concat(
      this.library.shelves.fantasy,
      this.library.shelves.fiction,
      this.library.shelves.nonFiction)

    console.log("kjlfkjaljlkdjlakjglkdfajf", booksAvailable)

      for (var i = 0; i < booksAvailable.length; i++){
        if (book == booksAvailable[i].title){
              this.library.shelves[booksAvailable[i].genre].splice(i, 1)
              return `Yes, we have ${book}`
        }
      }
    return `Sorry, we do not have ${book}`
  }

  calculateLateFee(days){
    return Math.ceil(days * 0.25)
  }
}




module.exports = Librarian;
