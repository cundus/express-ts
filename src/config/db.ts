import { Sequelize } from "sequelize";

const db = new Sequelize({
   host: "127.0.0.1",
   database: "tugas3",
   username: "root",
   password: "root",
   dialect: "mysql",
   port: 3306,
});

export default db;
