const { QueryFile } = require("pg-promise");
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

	static async queryFromFile(fileName) {
		const result = this.doQuery(new QueryFile(fileName));
		return result;
	}
}

module.exports = Database;
