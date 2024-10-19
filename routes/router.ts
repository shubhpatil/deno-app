import { Router } from "@oak/oak/router";
import { userRouter } from "./user.ts";

export const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = `<!DOCTYPE html>
      <html>
        <head><title>Hello oak!</title><head>
        <body>
          <h1>Hello oak!</h1>
        </body>
      </html>
    `;
});

router.use("/user", userRouter.routes());
