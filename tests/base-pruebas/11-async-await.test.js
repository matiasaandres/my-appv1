import {getImagen} from "../../src/base-pruebas/11-async-await";
describe('Pruebas en 11-Sync-await.js', ()=> {

    test('getIamgen debe retornar una URL de la imagen', async ()=>{

        const url = await getImagen();
        console.log(url);

        expect(typeof url).toBe('string');
    })
});