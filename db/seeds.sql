USE vshunt_db;

INSERT INTO users (user_name, password) VALUES ('John', 'b00tcamp');
INSERT INTO users (user_name, password) VALUES ('Robyn', 'b00tcamp');
INSERT INTO users (user_name, password) VALUES ('Brandon', 'b00tcamp');
INSERT INTO users (user_name, password) VALUES ('Stewart', 'b00tcamp');

INSERT INTO hunts (hunt_name) VALUES ('TourSLC');
INSERT INTO hunts (hunt_name) VALUES ('Casa de Robyn');
INSERT INTO hunts (hunt_name) VALUES ('Ghost Towns of Utah');

INSERT INTO stops (hunt_id, stop_name, clue, correct_answer, wrong_answer1, wrong_answer2, wrong_answer3) VALUES (1, 'Temple Square', 'How many seagulls are there in the statue commemorating the birds saving the Mormon Pioneers?', '12', '10', '3', '22');
INSERT INTO stops (hunt_id, clue, correct_answer) VALUES (2, 'Find this clue in the tree house - make sure you write down the code word written on the note to get your next clue...', 'yellow jacket');
INSERT INTO stops (hunt_id, stop_name, clue, correct_answer) VALUES (3, 'Ophir', 'What is written above the gate to the town cemetery?', 'Here end all the vanities of the world');