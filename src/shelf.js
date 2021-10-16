function shelfBook(book, shelf){
  if (shelf.length < 3){
    shelf.unshift(book);
  }
}

function unshelfBook(book, shelf){
  for (var i = 0; i < shelf.length; i++){
    if (shelf[i].title === book){
      shelf.splice(i, 1);
    }
  }
  return shelf
}

function listTitles(shelf){
  var list = [];
  for (var i = 0; i < shelf.length; i++){
    list.push(shelf[i].title);
  }
  return list.join(', ');
}

function searchShelf(shelf, name) {
  var hasBook = false;
  for(var i = 0; i < shelf.length; i++){
    if (shelf[i].title.includes(name)){
      hasBook = true;
    }
  }
  return hasBook;
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
