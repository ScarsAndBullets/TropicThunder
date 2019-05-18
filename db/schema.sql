DROP DATABASE IF EXISTS vshunt_db;

CREATE DATABASE vshunt_db;

USE vshunt_db;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT,
    user_name VARCHAR(20) NOT NULL,
    password VARCHAR(20) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE hunts (
    hunt_id INT AUTO_INCREMENT,
    hunt_name VARCHAR(100) NOT NULL,
    PRIMARY KEY (hunt_id)
);

CREATE TABLE stops (
    stop_id INT AUTO_INCREMENT,
    hunt_id INT NOT NULL,
    stop_name VARCHAR(100),
    clue VARCHAR(250) NOT NULL,
    correct_answer VARCHAR(150) NOT NULL,
    wrong_answer1 VARCHAR(150),
    wrong_answer2 VARCHAR(150),
    wrong_answer3 VARCHAR(150),
    PRIMARY KEY (stop_id)
);