import mysql from 'mysql'

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'teste!1234',
    database: 'crud',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to Db');
        return console.error(err.message);
    }
    console.log('Connected to Db');
});
