//---MySQL Connect------------------------------------
import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

let pool;

function createPool() {
    let pool = mysql.createPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        port: 3306,
    });

    pool.getConnection()
        .then((connection) => {
            console.log("MySQL connected successfully");
            connection.release();
        })
        .catch((error) => {
            console.log("MySQL connection error:", error.message);
            setTimeout(() => {
                console.log("Retrying MySQL connection...");
                createPool();
            }, 5000);
        });
}

createPool();

export default pool;
