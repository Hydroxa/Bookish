create table if not exists books (
	id SERIAL,
	author_id int NOT NULL,
	title varchar(50),
	isbn varchar(50) NOT NULL,
	copies int NOT NULL,

	PRIMARY KEY (id),
	FOREIGN KEY (author_id) REFERENCES authors(id)
);