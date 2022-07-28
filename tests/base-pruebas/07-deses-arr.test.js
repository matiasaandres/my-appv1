import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";


describe('Prueba 07-deses-arr', ()=>{

    test('debe retornar un string y un número', ()=>{


        const [letters,numbers] = retornaArreglo();
      
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        // probar con cualquier tipo de string ej: aleatorio string
        expect(letters).toEqual(expect.any(String));
    });


});
