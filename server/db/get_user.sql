SELECT commonname, id FROM users 
WHERE username = $1 
and pass = $2
