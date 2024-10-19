import { Context } from "@oak/oak/context";

export const auth = async (ctx: Context, next: () => Promise<unknown>) => {
  try {
    const headers: Headers = ctx.request.headers;
    const authorization = headers.get("Authorization");

    if (!authorization) {
      ctx.response.status = 401;
      return;
    }

    const jwt = authorization.split(" ")[1];

    if (!jwt) {
      ctx.response.status = 401;
      return;
    }

    // Verify payload
    const payload = null;

    if (!payload) {
      throw new Error("!payload");
    }

    await next();
  } catch (error) {
    ctx.response.status = 401;
    ctx.response.body = {
      error,
      message: "You are not authorized to access this route",
    };
    return;
  }
};
