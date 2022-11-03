import {getImagen} from "../../src/base-pruebas/11-async-await";
describe('Pruebas en 11-Sync-await.js', ()=> {

    test('getIamgen debe retornar un erro si no tenemos api key', async ()=>{

        const resp = await getImagen();
        

        expect(resp).toBe('No se encontro la imagen');
    })
});