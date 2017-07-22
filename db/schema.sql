CREATE DATABASE DownTheShore_db;
USE DownTheShore_db;

CREATE TABLE reservations
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	date date NOT NULL,
	nights int NOT NULL,
	PRIMARY KEY (reservationId)
);

CREATE TABLE guestbook
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	comment varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

