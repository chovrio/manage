import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.default";
import { getUserInfo } from "../service/user.service";
import { TR } from "../types";

export const login: TR = async (ctx) => {
  const { name } = ctx.request.body;
  const { password, ...res } = await getUserInfo({ name });
  ctx.body = {
    code: 200,
    message: "用户登录成功",
    result: {
      token: `Bearer ` + jwt.sign(res, JWT_SECRET, { expiresIn: "30d" }),
    },
  };
};
