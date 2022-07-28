import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";

describe("Prueba en 08-eim-exp", () => {

    test("getHeroeById debe retornar un heroe por ID", () => {

        const id = 1;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });

      

    });

    test("getHeroeById debe retornar undefined si no existe ", () => {

        const id = 100;
        const heroe = getHeroeById(id);

        expect(heroe).toBeFalsy(); // ojo que false arroja pass no utilizar false

    });
});