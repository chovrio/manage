import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import {
  userAlreadyExited,
  userFormateError,
  userDoesNotExist,
  invalidPassword,
  userLoginError,
  tokenNotExist,
} from "../constant/err.type";
import { getUserInfo } from "../service/user.service";
import { IUser, TR } from "../types";
import { JWT_SECRET } from "../config/config.default";
export const userValidator: TR = async (ctx, next) => {
  const { name, password } = ctx.request.body;
  // 合法性
  if (!name || !password) {
    console.error("用户名或密码为空", ctx.request.body);
    return ctx.app.emit("error", userFormateError, ctx);
  }
  await next();
};

export const verifyUser: TR = async (ctx, next) => {
  const { name }: IUser = ctx.request.body;
  // 合理性
  const res = await getUserInfo({ name });
  if (res) {
    console.error("用户名已经存在", { name });
    return ctx.app.emit("error", userAlreadyExited, ctx);
  }
  await next();
};
export const verifyLogin: TR = async (ctx, next) => {
  const { name, password } = ctx.request.body;
  try {
    const res = await getUserInfo({ name });
    console.log(res);
    if (!res) {
      console.error("用户名不存在", { name });
      return ctx.app.emit("error", userDoesNotExist, ctx);
    }
    if (!bcryptjs.compareSync(password, res.password)) {
      ctx.app.emit("error", invalidPassword, ctx);
      return;
    }
  } catch (error) {
    console.error(error);
    return ctx.app.emit("error", userLoginError, ctx);
  }
  await next();
};
let token: string;
export const tokenIsExist: TR = (ctx, next) => {
  token = <string>ctx.headers.authorization?.split("Bearer ")[1];
  if (!token) {
    console.error("未传递token");
    return ctx.app.emit("error", tokenNotExist, ctx);
  }
  next();
};

export const parseToken: TR = (ctx, next) => {
  console.log(token, JWT_SECRET);
  const info = jwt.verify(token, JWT_SECRET);
  console.log(info);
  next();
};
