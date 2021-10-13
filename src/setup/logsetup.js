const log4js = require("log4js");
const config = require("./config");

const fs = require("fs");
if (!fs.existsSync(config.logDirectory)) {
	fs.mkdirSync(config.logDirectory);
} else {
}

log4js.configure({
	appenders: {
		database: { type: "file", filename: `${config.logDirectory}/latest.log` },
	},
	categories: {},
});
