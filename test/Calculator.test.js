import { Calculator } from "../src/index";

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("adds two numbers correctly", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test("subtracts two numbers correctly", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test("multiplies two numbers correctly", () => {
    expect(calculator.multiply(3, 4)).toBe(12);
  });

  test("divides two numbers correctly", () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test("throws error when dividing by zero", () => {
    expect(() => calculator.divide(5, 0)).toThrow("Cannot divide by zero");
  });
});
