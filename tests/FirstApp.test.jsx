import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Prueba en <FirstApp />", () => {

  test("debe de hacer match con el snapshot", () => {

    // const title = "Hola, soy Goku";
    // const { container } = render( <FirstApp title={ title } /> );

    // expect( container ).toMatchSnapshot();



  });

  test("debe mostrar el título en un h1", ()=> {

    const title = "Hola, soy Goku";
    const { container,getByText, getByTestId } = render( <FirstApp title={title} /> );
    expect(getByText(title )).toBeTruthy();
    expect(getByTestId('test-title').innerHTML).toContain(title);
  //  const h1=container.querySelector('h1');
  //  expect(h1.innerHTML).toContain(title);

  })

  test("debe mostrar el subtitulo enviado por props", ()=> {

    const title = "Hola, soy Goku";
    const subTitle = "Soy un subtitulo"
    const { getAllByTest } = render( 
    <FirstApp 
      title={title} 
      subtitle={subTitle}
      /> );
    expect(getAllByText(subTitle).length).toBe(2);
 
  //  const h1=container.querySelector('h1');
  //  expect(h1.innerHTML).toContain(title);

  })

});
