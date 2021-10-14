create table if not exists loans (
	id SERIAL,
	user_id int NOT NULL,
	book_id int NOT NULL,
	due_date date NOT NULL,
	
	PRIMARY KEY (id),
	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (book_id) REFERENCES books(id)
);