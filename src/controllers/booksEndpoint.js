app.get("/books/:property", (req, res) => {
	if (req.params["property"] === "all") {
		//Get all book data
	} else {
		//Property is an ID
	}
});
