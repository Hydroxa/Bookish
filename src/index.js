const Database = require("./repository/database");
const LogFormats = require("./services/logFormats");
const express = require("express");
const config = require("./setup/config");
const app = express();

app.get("/all/:property", (req, res) => {
	switch (req.params["property"]) {
		case "books":
			const bookData = Database.getAllBooks();
			const toSend = [];
			//for (const book of bookData) {
			//toSend.push();
			//}
			res.send(LogFormats.serialiseObject(bookData, 8));
			break;
		case "users":
			res.send("This is the user list");
			break;
		case "authors":
			res.send("This is the author list");
			break;
		default:
			res.send(`Default!\n\n${req.params["property"]}`);
			break;
	}
});

app.listen(config.port, () => {
	console.log(`App listening on port ${config.port}`);
});

Database.init(config.password);
