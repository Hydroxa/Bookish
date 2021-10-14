const express = require("express");
const passport = require("passport");
const passportJwt = require("passport-jwt");
const jwt = require("jsonwebtoken");
const Users = require("./../services/users");
const config = require("./../setup/config");

const app = express();

configurePassport();

app.use(passport.initialize());

app.get("login", (req, res) => {
	const username = req.query.username;
	const password = req.query.password;
	if (Users.isUserValid(username, password)) {
		res.send({
			message: `Valid credentials. Welcome, ${username}`,
			token: createTokenForUser(username),
		});
	} else {
		res.status(400).send({
			errors: "Have you brought your passport, Gordon? (Invalid credentials)",
		});
	}
});

app.listen(config.port, () => {
	console.log(`App listening on port ${config.port}`);
});

module.exports = app;

function configurePassport() {
	const jwtOptions = {
		jwtFromRequest: passportJwt.ExtractJwt.fromHeader("x-access-token"),
		secretOrKey: config.secret,
	};
	passport.use(
		new passportJwt.Strategy(jwtOptions, (decodedJwt, next) => {
			//decodedJwt.username
			//decodedJwt.password but not hashed
		})
	);
}

function createTokenForUser(username) {
	return jwt.sign({ username: username }, config.secret);
}
