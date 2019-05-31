USE vshunt_db;

INSERT INTO users (userName, createdAt, updatedAt) VALUES ('John', );
INSERT INTO users (userName) VALUES ('Robyn');
INSERT INTO users (userName) VALUES ('Brandon');
INSERT INTO users (userName) VALUES ('Stewart');

INSERT INTO hunts (huntName) VALUES ('TourSLC');
INSERT INTO hunts (huntName) VALUES ('Casa de Robyn');
INSERT INTO hunts (huntName) VALUES ('Ghost Towns of Utah');

INSERT INTO stops (clue, correctAnswer) VALUES ('Find this clue in the tree house - make sure you write down the code word written on the note to get your next clue...', 'yellow jacket');
INSERT INTO stops (stopName, clue, correctAnswer) VALUES ('Ophir', 'What is written above the gate to the town cemetery?', 'Here end all the vanities of the world');