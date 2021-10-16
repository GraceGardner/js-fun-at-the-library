function createLibrary(name){
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
}

function addBook(library, book) {
  if (book.genre === "fantasy") {
    library.shelves.fantasy.push(book);
  } else if (book.genre === "fiction") {
    library.shelves.fiction.push(book);
  } else if (book.genre === "nonFiction") {
    library.shelves.nonFiction.push(book);
  }
}

function checkoutBook(library, bookName, genre) {
  if (genre == "fantasy"){
    for (var i = 0; i < library.shelves.fantasy.length; i++){
      if (library.shelves.fantasy[i].title.includes(bookName))
      {
        library.shelves.fantasy.splice(i, 1);
        return `You have now checked out ${bookName} from the ${library.name}`
      } 
    }
  }  else if (genre == "fiction"){
      for (var i = 0; i < library.shelves.fiction.length; i++){
        if (library.shelves.fiction[i].title.includes(bookName))
        {
          library.shelves.fiction.splice(i, 1);
          return `You have now checked out ${bookName} from the ${library.name}`;
        }
      }
    }  else if (genre == "nonFiction"){
        for (var i = 0; i < library.shelves.nonFiction.length; i++){
          if (library.shelves.nonFiction[i].title.includes(bookName))
          {
            library.shelves.nonFiction.splice(i, 1);
            return `You have now checked out ${bookName} from the ${library.name}`
          }
      }
}
            return `Sorry, there are currently no copies of ${bookName} available at the ${library.name}`
}


// for(var i = 0; i < shelf.length; i++){
//   if (shelf[i].title.includes(name)){
//     hasBook = true;
//   }
module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
