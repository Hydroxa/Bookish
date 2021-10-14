const Database = require("../repository/database");
const Crypto = require("crypto");

class Users {
	static async getAllUsers() {
		return await Database.doQuery(`SELECT * FROM users`);
		//Return all unabstracted book values
	}
	static async addUser(username, displayname, passhash) {
		Database.doQuery(`INSERT INTO users VALUES (${username},${displayname},${passhash})`);
	}
	static async addUsers(usernames, displaynames, passhashes) {
		if (usernames.length !== displaynames.length || passhashes.length !== displaynames.length) {
			throw Error("All arrays must have the same amount of data");
		} else {
			const inserts = "INSERT INTO users VALUES";
			for (let i = 0; i < usernames.length; i++) {
				inserts += ` (${usernames[i]},${displaynames[i]},${passhashes[i]}),`;
			}
			inserts.substring(0, inserts.length - 2);
			Database.doQuery(inserts);
		}
	}
	static hashPassword(password) {
		return Crypto.createHash("sha512").update(password).digest("hex");
	}
	static async isUserValid(username, password) {
		const passhash = this.hashPassword(password);
		const userCheck = await Database.doQuery(`SELECT passhash FROM users WHERE username = '${username}'`);
		if (userCheck.length > 0) {
			return passhash === userCheck.passhash;
		} else {
			return false;
		}
	}
	static async getBook(userID) {
		return await Database.doQuery(`SELECT * FROM users WHERE id = ${userID}`);
	}
}

module.exports = Users;
