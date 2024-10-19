import { Router } from "@oak/oak/router";
import { Context } from "@oak/oak/context";

export const userRouter = new Router();

userRouter.get("/", (ctx: Context) => {
  ctx.response.body = {
    message: "Hello! Deno",
  };
});

userRouter.post("/", async (ctx: Context) => {
  const body = await ctx.request.body.json();
  ctx.response.status = 201;
  ctx.response.body = {
    message: "Deno POST request",
    data: body,
  };
});
