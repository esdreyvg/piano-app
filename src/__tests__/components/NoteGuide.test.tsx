import React from "react";
import { render, screen } from "@testing-library/react";
import Guide from "../../components/NoteGuide";
import { Note } from "../../interface/Note";
import "@testing-library/jest-dom";


describe("NoteGuide component", () => {
  const mockNotes: Note[] = [
    { pitch: 60, time: 0.1 },
    { pitch: 62, time: 0.4 },
  ];

  it("muestra el título Principiante cuando experience es beginner", () => {
    render(<Guide notes={mockNotes} experience="beginner" onPlayAll={() => {}} />);
    expect(screen.getByText(/Guía \(Principiante\)/i)).toBeInTheDocument();
  });

  it("muestra el título Avanzado cuando experience es advanced", () => {
    render(<Guide notes={mockNotes} experience="advanced" onPlayAll={() => {}} />);
    expect(screen.getByText(/Guía \(Avanzado\)/i)).toBeInTheDocument();
  });

  it("muestra mensaje si no hay notas", () => {
    render(<Guide notes={[]} experience="beginner" onPlayAll={() => {}} />);
    expect(screen.getByText(/Sube un audio para ver las notas detectadas./i)).toBeInTheDocument();
  });

  it("muestra las notas correctamente", () => {
    render(<Guide notes={mockNotes} experience="advanced" onPlayAll={() => {}} />);
    expect(screen.getByText(/C4/i)).toBeInTheDocument(); // 60 → C4
    expect(screen.getByText(/D4/i)).toBeInTheDocument(); // 62 → D4
  });

  it("muestra consejo según nivel", () => {
    render(<Guide notes={mockNotes} experience="beginner" onPlayAll={() => {}} />);
    expect(screen.getByText(/Consejo:/i)).toBeInTheDocument();

    render(<Guide notes={mockNotes} experience="advanced" onPlayAll={() => {}} />);
    expect(screen.getByText(/Avanzado:/i)).toBeInTheDocument();
  });
});
