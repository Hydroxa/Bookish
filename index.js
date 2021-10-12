const express = require("express");
const app = express();
const port = 3000;

app.get("/all/:property", (req, res) => {
	res.send(`Working!\n\n${req.params["property"]}`);
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
