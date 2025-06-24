import React, { useState } from "react";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import { PianoVirtualProps } from "../interface/PianoVirtual";
import "react-piano/dist/styles.css";


const firstNote = MidiNumbers.fromNote("c3");
const lastNote = MidiNumbers.fromNote("f5");

const keyboardShortcuts = KeyboardShortcuts.create({
  firstNote,
  lastNote,
  keyboardConfig: KeyboardShortcuts.HOME_ROW,
});

const PianoVirtual: React.FC<PianoVirtualProps> = ({
  highlightedNotes = [],
  onPlayNote,
  playNote,
  modo = "beginner",
  notaCorrecta,
  notaIncorrecta,
}) => {
  const [notaTocada, setNotaTocada] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePlayNote = (midi: number) => {
    setNotaTocada(midi);
    if (playNote) playNote(midi); // usa la función de App.tsx
    if (onPlayNote) onPlayNote(midi);

    if (notaCorrecta !== undefined && modo === "beginner") {
      if (midi !== notaCorrecta) {
        setError("¡Nota incorrecta!");
      } else {
        setError(null); // nota correcta
      }
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Piano
        noteRange={{ first: firstNote, last: lastNote }}
        playNote={handlePlayNote}
        stopNote={() => {}}
        activeNotes={highlightedNotes}
        width={Math.min(window.innerWidth * 0.9, 1000)}
        keyboardShortcuts={keyboardShortcuts}
      />

      {modo === "beginner" && (
        <div style={{ marginTop: 20 }}>
          {notaTocada !== null && (
            <div style={{ fontSize: 32 }}>
              Nota tocada: {MidiNumbers.getAttributes(notaTocada).note}
            </div>
          )}

          {error &&
            typeof notaIncorrecta === "number" &&
            typeof notaCorrecta === "number" &&
            notaIncorrecta >= 0 && notaIncorrecta <= 127 &&
            notaCorrecta >= 0 && notaCorrecta <= 127 && (
              <div style={{ color: "red", fontWeight: "bold", fontSize: 28, marginTop: 15 }}>
                ❌ Nota incorrecta: {MidiNumbers.getAttributes(notaIncorrecta).note}
                <br />
                🎯 Nota esperada: {MidiNumbers.getAttributes(notaCorrecta).note}
              </div>
            )}
        </div>
      )}
    </div>
  );
};

export default PianoVirtual;
