import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

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

        expect(heroe).toBeFalsy(); // ojo que false+ arroja pass no utilizar false

    });

    test("getHeroeByOwner debe retornar arreglo con heores de DC y tener un largo de 3 ", () => {

        const owner = 'DC';
        const heroeArr = getHeroesByOwner(owner);

        expect(heroeArr.length).toBe(3);

        expect(heroeArr).toEqual(heroes.filter( (heroe) => heroe.owner === owner)) 

    });
    test("getHeroeByOwner debe retornar arreglo con heores de marvel y tener un largo de  2", () => {

        const owner = 'Marvel';
        const heroeArr = getHeroesByOwner(owner);

        expect(heroeArr.length).toBe(2);

        expect(heroeArr).toEqual(heroes.filter( (heroe) => heroe.owner === owner)) 

    });
});