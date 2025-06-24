# Manual de Usuario  
**Aplicación Piano Virtual**

Fecha: 24 de junio de 2025  
Autor: esdreyvg

---

## Índice

1. [Introducción](#introducción)
2. [Requisitos Previos](#requisitos-previos)
3. [Primeros Pasos](#primeros-pasos)
4. [Componentes Principales y Uso](#componentes-principales-y-uso)
    - [1. Pregunta de Propiedad de Piano](#1-pregunta-de-propiedad-de-piano)
    - [2. Biblioteca de Canciones](#2-biblioteca-de-canciones)
    - [3. Guía de Notas](#3-guía-de-notas)
    - [4. Piano Virtual](#4-piano-virtual)
    - [5. Separador de Pantalla](#5-separador-de-pantalla)
5. [Ejemplos Prácticos](#ejemplos-prácticos)
6. [Consejos y Buenas Prácticas](#consejos-y-buenas-prácticas)
7. [Preguntas Frecuentes](#preguntas-frecuentes)
8. [Contacto y Soporte](#contacto-y-soporte)

---

## Introducción

La **Aplicación Piano Virtual** es una herramienta interactiva educativa que permite al usuario aprender, practicar y reconocer notas musicales, ya sea con un piano físico o virtual. Incluye una biblioteca de canciones, una guía interactiva, y soporte tanto para principiantes como para usuarios avanzados.

---

## Requisitos Previos

- Navegador web moderno (Chrome, Firefox, Edge, etc.).
- Recomendado: Altavoces o auriculares para escuchar el audio.
- Opcional: Piano físico (no obligatorio).
- Acceso a internet (si la app se aloja online).

---

## Primeros Pasos

1. **Accede a la aplicación** en tu navegador.
2. Al iniciar, se te preguntará si tienes un piano físico disponible.
3. Selecciona una canción de la biblioteca o sube un audio para analizar notas.
4. Usa el piano virtual para practicar y seguir la guía de aprendizaje.

---

## Componentes Principales y Uso

### 1. Pregunta de Propiedad de Piano

- **Componente:** `PianoQuestion.tsx`
- **Función:** Pregunta al usuario si dispone de un piano físico.
- **Interfaz:**
  - Dos botones: “Sí” y “No”.
- **Acción:**  
  Selecciona la opción que corresponda para adaptar la experiencia de la aplicación.

---

### 2. Biblioteca de Canciones

- **Componente:** `LibraryMusic.tsx` (`Songbook`)
- **Función:** Presenta una lista de canciones y ejercicios musicales.
- **Interfaz:**
  - Botones con el nombre de cada canción.
- **Acción:**  
  Haz clic en una canción para cargar sus notas y practicarla.

**Ejemplo de canciones disponibles:**
- Escala de Do mayor
- Acorde Do mayor
- Mary had a little lamb
- Ode to Joy
- Acorde de séptima
- Melodía Simple

---

### 3. Guía de Notas

- **Componente:** `NoteGuide.tsx` (`Guide`)
- **Función:** Muestra la secuencia de notas (nombre, número MIDI y tiempo) a tocar o que fueron detectadas en un audio.
- **Modos:**
  - Principiante: Consejos y ayuda visual.
  - Avanzado: Menos asistencia, para practicar de oído y memoria.
- **Acción:**  
  Sigue la lista de notas mostradas y usa los consejos según tu nivel de experiencia.

---

### 4. Piano Virtual

- **Componente:** `PianoVirtual.tsx`
- **Función:** Teclado interactivo para reproducir notas y practicar canciones.
- **Características:**
  - Visualización de teclas resaltadas.
  - Feedback inmediato: indica si la nota tocada es correcta o incorrecta (modo principiante).
  - Atajos de teclado (fila central del teclado de tu PC).
- **Acción:**  
  Haz clic en las teclas o usa el teclado del ordenador para tocar. Observa el feedback en pantalla.

- **Indicadores visuales:**
  - ✅ Nota correcta: sin error.
  - ❌ Nota incorrecta: se muestra la nota que tocaste y la que esperabas.

---

### 5. Separador de Pantalla

- **Componente:** `ScreenDivider.tsx`
- **Función:** Divide la pantalla en dos secciones para mostrar simultáneamente la guía y el piano virtual, facilitando la práctica.

---

## Ejemplos Prácticos

### Ejemplo 1: Practicar una Escala

1. Selecciona “Escala de Do mayor” en la Biblioteca de Canciones.
2. Observa la lista de notas en la Guía.
3. Toca las notas en orden usando el piano virtual.
4. El modo principiante te indicará si tocas una nota errónea.

### Ejemplo 2: Practicar una Canción

1. Elige “Mary had a little lamb” en la Biblioteca.
2. Sigue la secuencia de notas y tiempos en la Guía.
3. Toca las notas con el piano virtual o físico.

### Ejemplo 3: Subir un Audio

- Si la app admite subir audios, súbelo y observa las notas detectadas en la Guía.

---

## Consejos y Buenas Prácticas

- Empieza en modo principiante si eres nuevo.
- Repite ejercicios hasta lograr tocar sin errores.
- Usa el teclado físico del ordenador para mayor rapidez.
- Si tienes un piano físico, intenta replicar lo aprendido fuera de la pantalla.

---

## Preguntas Frecuentes

**¿Puedo usar la aplicación sin piano físico?**  
Sí, el piano virtual es completamente funcional.

**¿Puedo agregar más canciones?**  
Sí, editando el archivo `Songs.tsx` puedes añadir nuevas canciones con nombre y secuencia de notas.

**¿Qué hacer si no suena el audio?**  
Verifica el volumen y la salida de audio de tu dispositivo.

---

## Contacto y Soporte

Para dudas, sugerencias o reportar errores, contacta al autor: [esdreyvg](mailto:esdreyvg@example.com)

---

**Fin del Manual**

---