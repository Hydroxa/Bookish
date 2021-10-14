create table if not exists authors (
	id SERIAL,
	author VARCHAR(50) NOT NULL,
	
	PRIMARY KEY (id)
);