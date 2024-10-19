import { RateLimiter } from "@teemukurki/rate-limiter";

export const rateLimiter = new RateLimiter({
  tokensPerInterval: 150,
  interval: "hour",
});
