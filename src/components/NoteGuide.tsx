import React from "react";
import { Note } from "../interface/Note";

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
    <div>
        <h3>
            Guía ({experience === "beginner" ? "Principiante" : "Avanzado"})
        </h3>
        {!notes.length && <p>Sube un audio para ver las notas detectadas.</p>}
        {!!notes.length && (
            <>
                <ul>
                    {notes.map((n, i) => (
                        <li key={i}>
                            <strong>{midiToNote(n.pitch)}</strong> (MIDI: {n.pitch}) en {n.time.toFixed(2)}s
                        </li>
                    ))}
                </ul>
            </>
        )}
        {experience === "beginner" ? (
            <p>
                Consejo: Toca las teclas resaltadas en el piano virtual o escucha la reproducción.
            </p>
        ) : (
            <p>Avanzado: Intenta tocar tú mismo las notas detectadas.</p>
        )}
    </div>
);

export default Guide;