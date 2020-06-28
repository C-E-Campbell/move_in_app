INSERT INTO users (commonname, username, pass, dateCreated)
VALUES ($1, $2, $3, $4)
returning commonname, id
/* dateCreated needs to be a string. format it like this 2020-06-27 if possible */