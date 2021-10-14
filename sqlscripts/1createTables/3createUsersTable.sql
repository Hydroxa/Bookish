create table if not exists users (
	id SERIAL,
	username VARCHAR(50) NOT NULL,
	displayName VARCHAR(50),
	passhash VARCHAR(512) NOT NULL,
	
	PRIMARY KEY (id)
);