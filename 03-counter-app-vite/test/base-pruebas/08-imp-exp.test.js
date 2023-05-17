import { expect } from "@jest/globals";
import { heroes } from "../../src/data/heroes";
import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas 08-imp-exp", () => {
  test("getHeroeById debe retornar un heroe por ID  ", () => {
    const id = 1;
    const hero = getHeroeById(id);
    console.log(hero);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById debe retornar undefined si no existe ID  ", () => {
    const id = 100;
    const hero = getHeroeById(id);
    console.log(hero);

    expect(hero).toBeFalsy();
  });
});

// Tarea
// Debe retornar un arreglo con los heroes de DC
// Lenght === 3
// toEqual al arreglo filtrado

// debe de retornar un arreglo con los heroes de Marvel
// lenght === 2

test("debe retornar un arreglo con los heroes de DC ", () => {
  const owner = "Marvel";
  const heroes = getHeroesByOwner(owner);

  // De esta forma seria estatico/en duro
  expect(heroes).toEqual([
    {
      id: 2,
      name: "Spiderman",
      owner: "Marvel",
    },
    {
      id: 5,
      name: "Wolverine",
      owner: "Marvel",
    },
  ]);

  // De esta Forma se hace dinamico y no es estatico pasando dato por dato en el array
  expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
});

test("debe retornar un arreglo con los heroes de Marvel ", () => {
  const owner = "DC";
  const heroes2 = getHeroesByOwner(owner);
  console.log(heroes2);

  // De esta forma seria estatico/en duro
  expect(heroes2).toEqual([
    { id: 1, name: "Batman", owner: "DC" },
    { id: 3, name: "Superman", owner: "DC" },
    { id: 4, name: "Flash", owner: "DC" },
  ]);

  // De esta Forma se hace dinamico y no es estatico pasando dato por dato en el array
  expect(heroes2).toEqual(heroes2.filter((heroe) => heroe.owner === owner));
});
