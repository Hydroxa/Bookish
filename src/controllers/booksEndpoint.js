const app = require("./listener");
const Books = require("../services/books");

app.get("/books/:property", async (req, res) => {
	if (req.params["property"] === "all") {
		const allBooksData = await Books.getAllBooks();
		res.send(JSON.stringify(allBooksData));
	} else {
		const bookData = await Books.getBook(req.params["property"]);
		res.send(JSON.stringify(bookData));
	}
});
