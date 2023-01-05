const dotenv = require("dotenv");
dotenv.config();
export const APP_PORT = <string>process.env.APP_PORT;
export const MYSQL_HOST = <string>process.env.MYSQL_HOST;
export const MYSQL_USER = <string>process.env.MYSQL_USER;
export const MYSQL_PWD = <string>process.env.MYSQL_PWD;
export const MYSQL_DB = <string>process.env.MYSQL_DB;
export const JWT_SECRET = <string>process.env.JWT_SECRET;
