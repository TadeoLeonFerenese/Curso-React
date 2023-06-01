import { fireEvent, render, screen } from "@testing-library/react";
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

  test("debe incrementar con el boton +1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1")); //fireEvent se utiliza para disparar un evento como en este caso la suma

    expect(screen.getByText("101")).toBeTruthy();
  });

  test("debe decrementar con el boton -1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));

    expect(screen.getByText("99")).toBeTruthy();
  });

  test("debe funcionar el boton de recet", () => {
    render(<CounterApp value={355} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    // fireEvent.click(screen.getByText("reset"));
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    expect(screen.getByText(355)).toBeTruthy();
  });
});
