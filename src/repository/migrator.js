const Database = require("./database");
function createTablesIfNotExist() {
	Database.doQuery("CREATE TABLE IF NOT EXISTS migrationTable");
	Database.doQuery("CREATE TABLE IF NOT EXISTS books");
}
