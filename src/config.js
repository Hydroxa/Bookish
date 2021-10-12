const fs = require("fs");
if (fs.existsSync("config.json")) {
	const configText = fs.readFileSync("config.json");
	const config = JSON.parse(configText);

	module.exports = config;
} else {
	fs.writeFileSync(
		"config.json",
		`{
	"port": 80,
	"password": "-= Enter your Postgres database password here =-",
	"logDirectory": "logs"
}`
	);
	throw Error("config.json did not exist! Generated a new file");
}
