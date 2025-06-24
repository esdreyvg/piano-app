export interface PianoVirtualProps {
  highlightedNotes: number[];
  onPlayNote: (midi: number) => void;
  playNote?: (midi: number) => void; // función centralizada desde App
  modo: "beginner" | "advanced";
  notaCorrecta?: number;
  notaIncorrecta?: number | null;
}