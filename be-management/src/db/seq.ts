import { Sequelize } from "sequelize";
import {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PWD,
  MYSQL_DB,
} from "../config/config.default";

const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  host: MYSQL_HOST,
  dialect: "mysql",
});

// seq
//   .authenticate()
//   .then(() => {
//     console.log("数据库链接成功");
//   })
//   .catch((err) => {
//     console.log("数据链接失败", err);
//   });
export default seq;
