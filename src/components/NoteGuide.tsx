import React from "react";
import { Note } from "../interface/Note";
import "./../assets/noteGuide.css";

interface GuideProps {
    notes: Note[];
    experience: "beginner" | "advanced";
    onPlayAll: () => void;
}

const midiToNote = (midi: number): string => {
    const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    return notes[midi % 12] + (Math.floor(midi / 12) - 1);
};

const Guide: React.FC<GuideProps> = ({ notes, experience }) => (
  <div className="note-guide-container">
    <h3 className="note-guide-title">
      Guía ({experience === "beginner" ? "Principiante" : "Avanzado"})
    </h3>

    {!notes.length && <p>Sube un audio para ver las notas detectadas.</p>}

    {!!notes.length && (
      <ul className="note-guide-list">
        {notes.map((n, i) => (
          <li key={i} className="note-guide-item">
            <strong>{midiToNote(n.pitch)}</strong> (MIDI: {n.pitch}) en {n.time.toFixed(2)}s
          </li>
        ))}
      </ul>
    )}

    {experience === "beginner" ? (
      <p className="note-guide-tip">
        Consejo: Toca las teclas resaltadas en el piano virtual o escucha la reproducción.
      </p>
    ) : (
      <p className="note-guide-tip advanced">
        Avanzado: Intenta tocar tú mismo las notas detectadas.
      </p>
    )}
  </div>
);


export default Guide;