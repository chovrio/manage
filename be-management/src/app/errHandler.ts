import { IError, KoaCtx } from "../types";
const errFn = (err: IError, ctx: KoaCtx) => {
  console.log(err, ctx);
  let status = 500;
  switch (err.code) {
    case 10001:
      status = 400;
      break;
    case 10002:
      status = 409;
      break;
    default:
      status = 200;
  }
  ctx.status = status;
  ctx.body = err;
};
export default errFn;
