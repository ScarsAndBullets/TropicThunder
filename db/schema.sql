DROP DATABASE IF EXISTS vshunt_db;

CREATE DATABASE vshunt_db;

USE vshunt_db;

CREATE TABLE users (
    UserId INT AUTO_INCREMENT,
    userName VARCHAR(20) NOT NULL,
    firebaseId VARCHAR(20),
    PRIMARY KEY (UserId)
);

CREATE TABLE hunts (
    HuntId INT AUTO_INCREMENT,
    huntName VARCHAR(100) NOT NULL,
    huntType VARCHAR(50),
    PRIMARY KEY (HuntId)
);

CREATE TABLE stops (
    StopId INT AUTO_INCREMENT,
    HuntId INT NOT NULL,
    huntType VARCHAR(50),
    stopName VARCHAR(100),
    clue VARCHAR(250) NOT NULL,
    correctAnswer VARCHAR(150) NOT NULL,
    geolocation VARCHAR(150),
    qrCode VARCHAR(150),
    PRIMARY KEY (StopId)
);