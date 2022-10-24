import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas'

describe("Test 09-promesas.js", () => {

    test("El getHeroeByIdAsync debe retornar un heroe", (done) => {

        const id = 1;

        getHeroeByIdAsync(id).then(hero => {

            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });

            done();
        });

    });

    test("El getHeroeByIdAsync debe retornar un error si heroe no existe", (done) => {

        const id = 100;

        getHeroeByIdAsync(id).
        then(hero => {
            expect(hero).toBeFalsy();
            done();
        })
            .catch(error => {

                expect(error).toBe(`No se pudo encontrar el héroe ${id}`);

                done();
            });

    },
    60_000);
});