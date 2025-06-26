import React, { useState } from "react";
import ExperienceSelector from "./components/ExperienceSelector";
import PianoOwnership from "./components/PianoQuestion";
import Songbook from "./components/LibraryMusic";
import Guide from "./components/NoteGuide";
import PianoVirtual from "./components/PianoVirtual";
import ScreenDivider from "./components/ScreenDividier";
import { Note } from "./interface/Note";
import * as Tone from "tone";
import "./assets/home.css";

type Experience = "beginner" | "advanced";

const App: React.FC = () => {
    const [experience, setExperience] = useState<Experience | null>(null);
    const [hasPiano, setHasPiano] = useState<boolean | null>(null);
    const [notes, setNotes] = useState<Note[]>([]);
    const [notasCancion, setNotasCancion] = useState<Note[] | null>(null);
    const [notaActualIndex, setNotaActualIndex] = useState(0);
    const [notaIncorrecta, setNotaIncorrecta] = useState<number | null>(null);

    const notaResaltada =
        notasCancion && notaActualIndex < notasCancion.length
            ? notasCancion[notaActualIndex].pitch
            : null;

    const highlightedNotes =
        notaResaltada !== null && notaResaltada >= 0 && notaResaltada <= 127
            ? [notaResaltada]
            : [];

    const playNote = async (midi: number) => {
        await Tone.start();
        const synth = new Tone.PolySynth().toDestination();
        synth.triggerAttackRelease(
            Tone.Frequency(midi, "midi").toFrequency(),
            0.5
        );
    };

    const handleNotePlayed = async (midi: number) => {
        playNote(midi);
        if (!notasCancion || notaActualIndex >= notasCancion.length) return;

        const notaEsperada = notasCancion[notaActualIndex].pitch;
        if (midi === notaEsperada) {
            setNotaActualIndex((prev) => prev + 1);
            setNotaIncorrecta(null);
        } else {
            setNotaIncorrecta(midi);
            setNotaActualIndex(0);
        }
    };

    const handleElegirOtraCancion = () => {
        setNotasCancion(null);
        setNotaActualIndex(0);
        setNotaIncorrecta(null);
        setNotes([]);
    };

    const playAllNotes = async () => {
        const source = notasCancion ?? notes;
        if (!source.length) return;

        await Tone.start();
        const synth = new Tone.PolySynth().toDestination();
        const now = Tone.now();

        source.forEach((n) => {
            synth.triggerAttackRelease(
                Tone.Frequency(n.pitch, "midi").toFrequency(),
                0.5,
                now + n.time
            );
        });
    };

    if (!experience) return <ExperienceSelector onSelect={setExperience} />;
    if (hasPiano === null) return <PianoOwnership onAnswer={setHasPiano} />;

    return (
        <div className="app-container">
            <h1 className="app-title">
                Sistema Web de Piano –{" "}
                {experience === "beginner" ? "Principiante" : "Avanzado"}
            </h1>

            {/* Barra de progreso */}
            {notasCancion &&
                notasCancion.length > 0 &&
                notaActualIndex < notasCancion.length && (
                    <div className="progress-bar">
                        <div
                            className="progress-bar-fill"
                            style={{
                                width: `${(notaActualIndex / notasCancion.length) * 100}%`,
                                backgroundColor: notaIncorrecta === null ? "limegreen" : "crimson",
                            }}
                        />
                    </div>
                )}

            {/* Cancionero */}
            {!notasCancion && (
                <Songbook
                    onSelectCancion={(notas) => {
                        setNotasCancion(notas);
                        setNotaActualIndex(0);
                        setNotaIncorrecta(null);
                    }}
                />
            )}

            {/* Mensaje de éxito */}
            {notasCancion &&
                notaActualIndex >= notasCancion.length && (
                    <div className="success-message">
                        <h2>🎉 ¡Felicidades! Completaste la canción correctamente.</h2>
                        <button onClick={handleElegirOtraCancion} className="success-button">
                            Elegir otra canción
                        </button>
                    </div>
                )}

            {/* Lección activa */}
            {notasCancion && notaActualIndex < notasCancion.length && (
                <ScreenDivider>
                    <Guide
                        notes={notasCancion}
                        experience={experience}
                        onPlayAll={playAllNotes}
                    />
                    <PianoVirtual
                        modo={experience}
                        highlightedNotes={highlightedNotes}
                        onPlayNote={handleNotePlayed}
                        notaCorrecta={notaResaltada ?? undefined}
                        notaIncorrecta={notaIncorrecta}
                    />
                </ScreenDivider>
            )}
        </div>
    );

};

export default App;
