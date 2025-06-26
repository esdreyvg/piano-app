// components/Songbook.tsx
import React from "react";
import { Note } from "../interface/Note";
import { Cancion } from "../interface/Song";
import { Cancionero } from "../songs/Songs";
import "../assets/songbook.css";

interface SongbookProps {
  onSelectCancion: (notas: Note[]) => void;
}

const canciones: Cancion[] = Cancionero;

const Songbook: React.FC<SongbookProps> = ({ onSelectCancion }) => (
  <div className="songbook-container">
    <h3 className="songbook-title">Biblioteca de Canciones</h3>
    <ul className="songbook-list">
      {canciones.map((cancion, index) => (
        <li key={index}>
          <button
            className="songbook-button"
            onClick={() => onSelectCancion(cancion.notas)}
          >
            🎵 {cancion.nombre}
          </button>
        </li>
      ))}
    </ul>
  </div>
);


export default Songbook;
