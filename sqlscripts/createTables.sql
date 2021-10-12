create table authors (
	id int NOT NULL,
	author VARCHAR(50) NOT NULL,
	
	PRIMARY KEY (id)
);

create table users (
	id int NOT NULL,
	username VARCHAR(50) NOT NULL,
	displayName VARCHAR(50),
	passhash VARCHAR(50) NOT NULL
	
	PRIMARY KEY (id)
);

create table books (
	id int NOT NULL,
	author_id 
);

create table loans (
	id int NOT NULL,
	user_id int NOT NULL,
	book_id int NOT NULL,
	due_date date NOT NULL,
	
	PRIMARY KEY (id),
	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (book_id) REFERENCES books(id)
);