USE vshunt_db;

INSERT INTO users (userName, firebaseId) VALUES ('John', '01234567');
INSERT INTO users (userName, firebaseId) VALUES ('Robyn', '01234568');
INSERT INTO users (userName, firebaseId) VALUES ('Brandon', '01234569');
INSERT INTO users (userName, firebaseId) VALUES ('Stewart', '01234560');

INSERT INTO hunts (huntName, huntCode) VALUES ('TourSLC', '012-345-678');
INSERT INTO hunts (huntName, huntCode) VALUES ('Casa de Robyn', '012-345-679');
INSERT INTO hunts (huntName, huntCode) VALUES ('Ghost Towns of Utah', '012-345-670');

INSERT INTO questions (clue) VALUES ('Find this clue in the tree house - make sure you write down the code word written on the note to get your next clue...');
INSERT INTO questions (clue) VALUES ('What is written above the gate to the Ophir town cemetery?');

INSERT INTO answers (correctAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree) VALUES ('Red', 'Yellow', 'Blue', 'Green');
INSERT INTO answers (correctAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree) VALUES ('Suck it', 'Eat it', '''What is written above the gate to the town cemetery?', 'Here end all the vanities of the world');