import { Note } from "./Note";

export interface Cancion {
  nombre: string;
  notas: Note[]; // notas en MIDI
}