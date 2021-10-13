class LogFormats {
	static formatError(error, message, context) {
		return `\n-= Exception =-\n${message}\n(${error.code}) : "${error.message}"\n\n-=Stack Trace =-\n${error.stack}\n${
			context !== undefined ? `\n -= Value Dump = -\n${serialiseObject(context, 10)}` : ""
		}`;
	}

	static serialiseObject(obj, layers, tabs) {
		if (tabs === undefined) tabs = 0;
		if (layers === 0) return `[ ${obj.length} items ]`;

		const tabPadding = "\t".repeat(tabs);
		const propPadding = "\t".repeat(tabs + 1);

		let output = `(${tabs !== 0 ? obj.constructor.name : ""}){\n`;
		for (const key in obj) {
			if (typeof obj[key] === "object") {
				output += propPadding + key + ":" + serialiseObject(obj[key], layers - 1, tabs + 1) + "\n";
			} else if (typeof obj[key] === "function") {
				output += `${propPadding}${key}: function\n`;
			} else {
				output += `${propPadding}${key}: ${obj[key]}\n`;
			}
		}
		output += `${tabPadding}}`;
		return output;
	}
}

module.exports = LogFormats;
