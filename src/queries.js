const pgPromise = require("pg-promise")();

class Database {
	static init(password) {
		this.db = pgPromise(`postgres://postgres:${password}@localhost:5432`);
	}

	static async doQuery(query, options) {
		try {
			const queryResult = await this.db.any(query);
			return queryResult;
		} catch (err) {
			//Log the error
		}
	}

	static async getAllUsers() {}

	static async getAllAuthors() {}

	static async getAllBooks() {
		const result = this.doQuery("SELECT * FROM books");
		return result;
		// Return array
	}
}

module.exports = Database;
