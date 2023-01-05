import Application from "koa";
import Koa from "koa";
import Router from "koa-router";

// Koa上下文类型
export type KoaCtx = Koa.ParameterizedContext<
  Koa.DefaultState,
  Koa.DefaultContext,
  any
>;
// Koa next函数类型
export type KoaNext = Application.Next;
// Koa 路由中间件类型
export type TR = Router.IMiddleware;
