import { IError } from "../types";

export const userFormateError: IError = {
  code: 10001,
  message: "用户名或密码为空",
  result: "",
};

export const userAlreadyExited: IError = {
  code: 10002,
  message: "用户已经存在",
  result: "",
};

export const userDoesNotExist: IError = {
  code: 10004,
  message: "用户不存在",
  result: "",
};

export const userLoginError: IError = {
  code: 10005,
  message: "用户登录失败",
  result: "",
};

export const invalidPassword: IError = {
  code: 10006,
  message: "密码不匹配",
  result: "",
};

export const tokenNotExist: IError = {
  code: 10007,
  message: "token不存在",
  result: "",
};
