import { render, screen, fireEvent } from "@testing-library/react";
import Songbook from "../../components/LibraryMusic";
import { Cancion } from "../../interface/Song";

// Mock el módulo de canciones
jest.mock("../../songs/Songs", () => ({
  Cancionero: [
    { nombre: "Canción de prueba", notas: [{ pitch: 60, time: 0 }] },
  ] as Cancion[],
}));

describe("Songbook", () => {
  it("renderiza las canciones y permite seleccionarlas", () => {
    const mockSelect = jest.fn();

    render(<Songbook onSelectCancion={mockSelect} />);

    const boton = screen.getByText("Canción de prueba");
    fireEvent.click(boton);

    expect(mockSelect).toHaveBeenCalledWith([{ pitch: 60, time: 0 }]);
  });
});
