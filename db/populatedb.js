require('dotenv').config();
const { Client } = require('pg');
const {neon} = require('@neondatabase/serverless');

const SQL = `
    
`;

async function main() {
    console.log("seeding...");
    console.log("DATABASE_URL:", process.env.DATABASE_URL ? "Found" : "Not found");
    
    if (!process.env.DATABASE_URL) {
        console.error("DATABASE_URL is not defined in environment variables");
        process.exit(1);
    }
    

    try {
        console.log("Attempting to connect to database...");
        const sql = neon(process.env.DATABASE_URL);
        console.log("Creating table...");
        await sql`DROP TABLE IF EXISTS messages;`
        await sql`
                CREATE TABLE IF NOT EXISTS messages (
                    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
                    username VARCHAR(225),
                    message VARCHAR(225),
                    added DATE NOT NULL DEFAULT CURRENT_DATE
                );`;

        console.log("Table successfully created\ndone...");
    } catch (error) {
        console.error("Database error:", error.message);
        console.error("Error code:", error.code);
        console.error("Full error:", error);
        process.exit(1);
    }
}

main().catch(error => {
    console.error("Script error:", error);
    process.exit(1);
});