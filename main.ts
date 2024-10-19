import { Application } from "@oak/oak/application";
import { oakCors } from "@tajpouria/cors";
import { router } from "./routes/router.ts";
import staticFiles from "https://deno.land/x/static_files@1.1.6/mod.ts";
// import logger from "https://deno.land/x/oak_logger@1.0.0/mod.ts";

// Deno Oak instance
const app = new Application();

// Port
const port = Number(Deno.env.get("PORT")) || 5000;

// CORS middleware
app.use(oakCors());

// Serve static files
app.use(
  staticFiles("./public", {
    prefix: "/public",
  }),
);

// Logger middleware
// app.use(logger.logger);

// API Router
app.use(router.routes());
app.use(router.allowedMethods());

// Serve runtime
// console.log(`Server: http://localhost:${port}`);
// app.listen({ port: port });

app.addEventListener("listen", ({ port }) => {
  console.log(`Server: http://localhost:${port}`);
});

if (import.meta.main) {
  await app.listen({ port: port });
}

export { app };
