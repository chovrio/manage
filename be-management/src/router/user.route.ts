import Router from "koa-router";
import { login } from "../controller/user.controller";
import {
  userValidator,
  verifyUser,
  verifyLogin,
  tokenIsExist,
  parseToken,
} from "../middleware/user.middleware";

const router = new Router({ prefix: "/user" });
// 登录接口
router.post("/login", userValidator, verifyLogin, login);
// 获得用户信息接口
router.get("/info", tokenIsExist, parseToken, (ctx, next) => {
  ctx.body = {
    message: "test",
  };
});
module.exports = router;
