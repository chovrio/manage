import { DataType, DataTypes } from "sequelize";
import seq from "../db/seq";
const User = seq.define(
  "user",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      comment: "用户名，唯一",
    },
    password: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      comment: "密码",
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "等级 0是超级管理员 1是管理员 2是用户",
    },
  },
  {
    // 生成时间戳
    timestamps: true,
  }
);
// 是否要强制同步数据库(没有表可以创建表)
// User.sync({ force: false });
export default User;
