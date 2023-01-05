import Koa from "koa";
import KoaBody, { HttpMethodEnum } from "koa-body";
import { join } from "path";
import router from "../router";
import errHandler from "./errHandler";
const { PUT, GET, POST, DELETE } = HttpMethodEnum;
const app = new Koa();
app.use(
  KoaBody({
    multipart: true,
    formidable: {
      uploadDir: join(__dirname, "../upload"),
      keepExtensions: true,
    },
    parsedMethods: [PUT, GET, POST, DELETE],
  })
);
app.use(router.routes());
// 统一的错误处理
app.on("error", errHandler);
export default app;
