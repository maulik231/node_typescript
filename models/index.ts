import { Sequelize } from "sequelize";
import Users from "./users.model";
import 'dotenv/config';

const dbName = process.env.DB_NAME as string
const dbUser = process.env.DB_USER as string
const dbHost = process.env.DB_HOST
const dbPassword = process.env.DB_PASSWORD

const sequelize: Sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  port: 5432,
  dialect: 'postgres'
})

const db = {
  sequelize,
  Users: Users(sequelize),
}

export default db;