import { usContext } from "../../src/base-pruebas/06-deses-obj";
import { expect } from "@jest/globals";

describe(" Prueba en 06-deses-obj ", () => {
  test("usContext debe retornar ", () => {
    const key = "Tadeo";
    const age = 31;
    const useContexto = usContext({ clave: key, edad: age });

    expect(useContexto).toEqual({
      nombreClave: key,
      anios: age,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    });
  });
});
