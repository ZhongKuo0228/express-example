//---Sqlite Connect------------------------------------
import sqlite3 from "sqlite3";
import { open } from "sqlite";

async function createConnection() {
    try {
        const db = await open({
            filename: "./models/default_db.db",
            driver: sqlite3.Database,
        });
        console.log("SQLite connected successfully");
        return db;
    } catch (error) {
        console.log("SQLite connection error:", error.message);
        setTimeout(() => {
            console.log("Retrying SQLite connection...");
            createConnection();
        }, 5000);
    }
}

const db = await createConnection();

export default db;
