import { render, screen } from "@testing-library/react";
import { CounterApp } from "../../src/CounterApp";
import { expect } from "@jest/globals";

describe("Pruebas en CounterApp", () => {
  const initialValue = 100;

  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });
  test("debe Mostrar el valor inicial de 100", () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText("100")).toBeTruthy();
    //TODO Esta forma es mas larga y engorrosa pero es la que se me ocurrio ami
    // expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
    //   "100"
    // );
  });
});
