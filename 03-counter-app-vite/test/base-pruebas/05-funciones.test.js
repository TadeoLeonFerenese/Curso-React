import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";
import { expect } from "@jest/globals";

describe("Purbas en 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(testUser).toEqual(user); // en este caso no se puede usar "toBe" es por que en este caso usamos objetos
  });

  test("getUsuarioActivo debe retornar un objeto", () => {
    const name = "Tadeo";
    const user = getUsuarioActivo(name);

    expect(user).toStrictEqual({
      uid: "ABC567",
      username: name,
    });
  });
});
