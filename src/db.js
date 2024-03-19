import pg from "pg";

export const pool = new pg.Pool({
  port: 5432,
  host: "localhost",
  user: "postgres",
  password: "xBerh123",
  database: "taskdb"
});

pool.on("connect", () => {
  console.log("connected to the db");
});
