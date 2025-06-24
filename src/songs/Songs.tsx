import { Cancion } from "../interface/Song";

// Escala de Do mayor (C major scale)
const cMajorScale: Cancion = {
    nombre: "Escala de Do mayor",
    notas: [
        { pitch: 60, time: 0 },   // C4
        { pitch: 62, time: 0.5 }, // D4
        { pitch: 64, time: 1 },   // E4
        { pitch: 65, time: 1.5 }, // F4
        { pitch: 67, time: 2 },   // G4
        { pitch: 69, time: 2.5 }, // A4
        { pitch: 71, time: 3 },   // B4
        { pitch: 72, time: 3.5 }  // C5
    ],
};

// Acorde Do mayor (C major chord)
const cMajorChord: Cancion = {
    nombre: "Acorde Do mayor",
    notas: [
        { pitch: 60, time: 0 }, // C4
        { pitch: 64, time: 0 }, // E4
        { pitch: 67, time: 0 }  // G4
    ],
};

// "Mary had a little lamb" (fragmento)
const maryHadALittleLamb: Cancion = {
    nombre: "Mary had a little lamb",
    notas: [
        { pitch: 64, time: 0 },   // E4
        { pitch: 62, time: 0.5 }, // D4
        { pitch: 60, time: 1 },   // C4
        { pitch: 62, time: 1.5 }, // D4
        { pitch: 64, time: 2 },   // E4
        { pitch: 64, time: 2.5 }, // E4
        { pitch: 64, time: 3 },   // E4
        { pitch: 62, time: 3.5 }, // D4
        { pitch: 62, time: 4 },   // D4
        { pitch: 62, time: 4.5 }, // D4
        { pitch: 64, time: 5 },   // E4
        { pitch: 67, time: 5.5 }, // G4
        { pitch: 67, time: 6 }    // G4
    ],
};

// "Ode to Joy" (fragmento)
const odeToJoy: Cancion = {
    nombre: "Ode to Joy",
    notas: [
        { pitch: 64, time: 0 },   // E4
        { pitch: 64, time: 0.5 }, // E4
        { pitch: 65, time: 1 },   // F4
        { pitch: 67, time: 1.5 }, // G4
        { pitch: 67, time: 2 },   // G4
        { pitch: 65, time: 2.5 }, // F4
        { pitch: 64, time: 3 },   // E4
        { pitch: 62, time: 3.5 }, // D4
        { pitch: 60, time: 4 },   // C4
        { pitch: 60, time: 4.5 }, // C4
        { pitch: 62, time: 5 },   // D4
        { pitch: 64, time: 5.5 }, // E4
        { pitch: 64, time: 6 },   // E4
        { pitch: 62, time: 6.5 }, // D4
        { pitch: 62, time: 7 }    // D4
    ],
};

// Acorde de séptima (G7 chord)
const g7Chord: Cancion = {
    nombre: "Acorde de séptima",
    notas: [
        { pitch: 67, time: 0 }, // G4
        { pitch: 71, time: 0 }, // B4
        { pitch: 74, time: 0 }, // D5
        { pitch: 77, time: 0 }  // F5
    ],
};

const cEscalaC: Cancion = {
    nombre: "Escala C (con tiempos)",
    notas: [
        { pitch: 60, time: 0 },
        { pitch: 62, time: 1 },
        { pitch: 64, time: 2 },
        { pitch: 65, time: 3 },
        { pitch: 67, time: 4 },
        { pitch: 69, time: 5 },
        { pitch: 71, time: 6 },
        { pitch: 72, time: 7 },
    ],
};

const cMelodíaSimple: Cancion = {
    nombre: "Melodía Simple",
    notas: [
        { pitch: 64, time: 0 },
        { pitch: 64, time: 1 },
        { pitch: 65, time: 2 },
        { pitch: 67, time: 3 },
        { pitch: 67, time: 4 },
        { pitch: 65, time: 5 },
        { pitch: 64, time: 6 },
        { pitch: 62, time: 7 },
        { pitch: 60, time: 8 },
    ],
};

export const Cancionero = [
    cEscalaC,
    cMajorChord,
    cMajorScale,
    cMelodíaSimple,
    maryHadALittleLamb,
    odeToJoy,
    g7Chord
];