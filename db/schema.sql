###
Schema

DROP DATABASE IF EXISTS sequelized_burger_db;
CREATE DATABASE sequelized_burger_db;
USE sequelized_burger_db;

CREATE TABLE Burgers
(
	id int NOT NULL
	AUTO_INCREMENT PRIMARY KEY,
	burger_name varchar
	(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON
	UPDATE CURRENT_TIMESTAMP
	);