import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Prueba en <CounterApp />", () => {
  const initialValue = 10;

  test("debe hacer mach con el snapshot", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar el valor inicial de 100 ", () => {
    render(<CounterApp value={100} />);
    //expect(screen.getByText('100')).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      "100"
    );
  });

  test("Debe incrementar el con el boton +1", () => {
    render(<CounterApp value={initialValue} />);
    //fireEvent permite lanzar un evento
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("11")).toBeTruthy();
  });

  test("Debe decrementar el con el boton -1", () => {
    render(<CounterApp value={initialValue} />);
    //fireEvent permite lanzar un evento
    fireEvent.click(screen.getByText("-1"));
    //screen.debug;
    expect(screen.getByText("9")).toBeTruthy();
  });

  test("Debe de funcionar el boton Reset", () => {
    render(<CounterApp value={initialValue} />);
    //fireEvent permite lanzar un evento
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    //fireEvent.click(screen.getByText("Reset"));
    //mejorar especificacion de boton
    fireEvent.click(screen.getByRole('button',{name:'btn-reset'}));
    expect(screen.getByText("10")).toBeTruthy();
  });
});
