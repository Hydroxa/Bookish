const Books = require("./../repository/books");

class BookEx extends Books {
	static getBookAuthor(bookID) {
		const book = Books.getBook(bookID);
		return book.author;
		//Return author of specific book
	}
}

module.exports = Books;
