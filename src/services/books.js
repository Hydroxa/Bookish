const Database = require("../repository/database");

class Books {
	static async getAllBooks() {
		return await Database.doQuery(`SELECT * FROM books`);
		//Return all unabstracted book values
	}
	static addBook(authorID, title, isbn, copies) {
		Database.doQuery(`INSERT INTO books VALUES (${authorID},${title},${isbn},${copies})`);
	}
	static addBooks(authorIDs, titles, isbns, copies) {
		if (authorIDs.length !== titles.length || titles.length !== isbns.length || isbns.length !== copies) {
			throw Error("All arrays must have the same amount of data");
		} else {
			const inserts = "INSERT INTO books VALUES";
			for (let i = 0; i < authorIDs.length; i++) {
				inserts += ` (${authorIDs[i]},${titles[i]},${isbns[i]},${copies[i]}),`;
			}
			inserts.substring(0, inserts.length - 2);
			Database.doQuery(inserts);
		}
	}
	static getBook(bookID) {
		return Database.doQuery(`SELECT * FROM books WHERE id = ${bookID}`);
	}
}

module.exports = Books;
