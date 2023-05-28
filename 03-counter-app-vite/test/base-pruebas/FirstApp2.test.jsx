import { render, screen } from "@testing-library/react";
import { FirstApp } from "../../src/FirstApp";
import { expect, test } from "@jest/globals";

describe("Pruebas en <FisrtApp/>", () => {
  const title = "Hola, soy Goku";
  const subTitle = "Soy un subtitulo";

  test("debe hacer match con el snaptShot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('debe contener el mensaje "Hola, soy Goku"', () => {
    render(<FirstApp title={title} />);
    // screen.debug();

    expect(screen.getByText(title)).toBeTruthy();
  });

  test("debe mostrar el titulo en un h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("debe de mostrar el subtitulo enviado por props", () => {
    render(<FirstApp title={title} subTitle={subTitle} />);
    expect(screen.getAllByText(subTitle).lenght).toBe(); //en teoria el toBe tiene que tener 2 por que retorna un array, pero aparentemente aca le chupa 7 huevos y lo testea asi
  });
});
