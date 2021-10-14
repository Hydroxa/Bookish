const express = require("express");
const passport = require("passport");
const passportJwt = require("passport-jwt");
const jwt = require("jsonwebtoken");

const secret = "uwu this is such a secret secret";

const config = require("./../setup/config");
const app = express();

configurePassport();

app.use(passport.initialize());

app.get("login", (req, res) => {
	const username = request.query.username;
	const password = request.query.password;
});

app.listen(config.port, () => {
	console.log(`App listening on port ${config.port}`);
});

module.exports = app;

function configurePassport() {
	const jwtOptions = {
		jwtFromRequest: passportJwt.ExtractJwt.fromHeader("x-access-token"),
		secretOrKey: secret,
	};
	passport.use(
		new passportJwt.Strategy(jwtOptions, (decodedJwt, next) => {
			//decodedJwt.username
			//decodedJwt.password but not hashed
		})
	);
}

function createTokenForUser(username) {
	return jwt.sign({ username: username }, secret);
}
