USE vshunt_db;

INSERT INTO user (user_name) VALUES ('John', );
INSERT INTO user (user_name) VALUES ('Robyn');
INSERT INTO user (user_name) VALUES ('Brandon');
INSERT INTO user (user_name) VALUES ('Stewart');

INSERT INTO hunt (hunt_name) VALUES ('TourSLC');
INSERT INTO hunt (hunt_name) VALUES ('Casa de Robyn');
INSERT INTO hunt (hunt_name) VALUES ('Ghost Towns of Utah');

INSERT INTO stop (hunt_id, stop_name, clue, correct_answer, wrong_answer1, wrong_answer2, wrong_answer3) VALUES (1, 'Temple Square', 'How many seagulls are there in the statue commemorating the birds saving the Mormon Pioneers?', '12', '10', '3', '22');
INSERT INTO stop (hunt_id, clue, correct_answer) VALUES (2, 'Find this clue in the tree house - make sure you write down the code word written on the note to get your next clue...', 'yellow jacket');
INSERT INTO stop (hunt_id, stop_name, clue, correct_answer) VALUES (3, 'Ophir', 'What is written above the gate to the town cemetery?', 'Here end all the vanities of the world');