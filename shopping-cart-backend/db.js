import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "chuilaptrinhngu12@",
  database: "shopping_cart",
  charset: "utf8mb4",
});
