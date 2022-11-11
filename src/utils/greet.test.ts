import { greet } from "./greet";

test("greet returns a string", () => {
  expect(greet).toBe("Welcome to the baby name generator");
});
