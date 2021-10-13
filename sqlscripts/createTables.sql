create table if not exists authors (
	id SERIAL,
	author VARCHAR(50) NOT NULL,
	
	PRIMARY KEY (id)
);

create table if not exists users (
	id SERIAL,
	username VARCHAR(50) NOT NULL,
	displayName VARCHAR(50),
	passhash VARCHAR(50) NOT NULL
	
	PRIMARY KEY (id)
);

create table if not exists books (
	id SERIAL,
	author_id int NOT NULL,
	title varchar(50),
	isbn varchar(50) NOT NULL,
	copies int NOT NULL,

	PRIMARY KEY (id),
	FOREIGN KEY (author_id) REFERENCES authors(id)
);

create table if not exists loans (
	id SERIAL,
	user_id int NOT NULL,
	book_id int NOT NULL,
	due_date date NOT NULL,
	
	PRIMARY KEY (id),
	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (book_id) REFERENCES books(id)
);