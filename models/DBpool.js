//---MySQL Connect------------------------------------
import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

let pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: 3306,
});

pool.getConnection()
    .then((connection) => {
        console.log("SQL connecting success");
        connection.release();
    })
    .catch((error) => {
        console.log("SQL connecting error");
    });

export default pool;
