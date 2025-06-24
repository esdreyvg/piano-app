// components/Songbook.tsx
import React from "react";
import { Note } from "../interface/Note";
import { Cancion } from "../interface/Song";
import { Cancionero } from "../songs/Songs";

interface SongbookProps {
  onSelectCancion: (notas: Note[]) => void;
}

const canciones: Cancion[] = Cancionero;

const Songbook: React.FC<SongbookProps> = ({ onSelectCancion }) => (
  <div style={{ marginBottom: 20 }}>
    <h3>Biblioteca de Canciones</h3>
    <ul>
      {canciones.map((cancion, index) => (
        <li key={index}>
          <button style={{ marginBottom: 5 }} onClick={() => onSelectCancion(cancion.notas)}>
            {cancion.nombre}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default Songbook;
