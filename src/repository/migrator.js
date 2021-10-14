const Database = require("./database");
const fs = require("fs");
const config = require("../setup/config");

Database.init(config.password);

async function loadSQLRecursive(folder) {
	const files = fs.readdirSync(folder);
	for (const file of files) {
		const folderLoc = `${folder}/${file}`;
		if (fs.lstatSync(folderLoc).isDirectory()) {
			await loadSQLRecursive(folderLoc);
		} else {
			await Database.doQueryFromFile(`./../../${folderLoc}`);
		}
	}
}

loadSQLRecursive("sqlscripts");