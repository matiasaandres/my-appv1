
describe('Pruebas en <DemoComponet/>',()=>{

test('Esta prueba no debe fallar',()=>{
   
    //1,. inicialización
    const message1 = "Hola matías";

    //2.- estímulo

    const message2 = message1.trim();

    //3.- Observar el comportamiento... esperando
    // .toBe comprar igualdad entre message1 y message2
    expect(message1).toBe(message2);   

});


});