import { render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Prueba de <CounterApp />", () => {
  const value = 10;

  test("Debe hacer mach con el snapshot", () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });
});
