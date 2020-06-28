CREATE TABLE users(
id SERIAL PRIMARY KEY, 
commonname VARCHAR NOT NULL,
username VARCHAR NOT NULL UNIQUE,
pass VARCHAR NOT NULL,
dateCreated DATE
)

/* 
SEED DATA: 
INSERT INTO users (commonname, username, pass, dateCreated)
VALUES ('Charles Campbell', 'ccamp290', 'rufus0606', '6/27/2020') 
*/