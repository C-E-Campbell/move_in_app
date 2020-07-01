CREATE TABLE users(
id SERIAL PRIMARY KEY, 
commonname VARCHAR NOT NULL,
username VARCHAR NOT NULL UNIQUE,
pass VARCHAR NOT NULL,
dateCreated DATE DEFAULT CURRENT_DATE
)

/* 
SEED DATA FOR TESTING: 
INSERT INTO users (commonname, username, pass, dateCreated)
VALUES ('test man', 'test123', '123', '6/27/2020') 
*/

/*
HARD RESET BEFORE LIVE (Drop and Recreate)
DROP TABLES users

CREATE TABLE users(
id SERIAL PRIMARY KEY, 
commonname VARCHAR NOT NULL,
username VARCHAR NOT NULL UNIQUE,
pass VARCHAR NOT NULL,
dateCreated DATE
)

*/