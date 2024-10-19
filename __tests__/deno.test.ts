import { assertEquals } from "@std/assert";
import { expect } from "jsr:@std/expect";
import { add } from "../utils/index.ts";

Deno.test(function addTest() {
  assertEquals(add(5, 5), 10);
});

Deno.test(function addTestv2() {
  const result = add(5, 5);
  expect(result).toBe(10);
});
