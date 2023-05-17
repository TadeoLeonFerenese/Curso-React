import { getSaludo } from "../../src/base-pruebas/02-template-string";
import { expect, test } from "@jest/globals";

describe("Prueba en 02-template-string", () => {
  test("getSaludo debe retornar 'Hola Tadeo' ", () => {
    const name = "Tadeo";
    const message = getSaludo(name);

    expect(message).toBe(`Hola${name}`);
  });
});
