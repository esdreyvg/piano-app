import React from "react";

interface ExperienceSelectorProps {
    onSelect: (experience: "beginner" | "advanced") => void;
}

const ExperienceSelector: React.FC<ExperienceSelectorProps> = ({ onSelect }) => (
    <div style={{ padding: 32 }}>
        <h2>Selecciona tu experiencia</h2>
        <button onClick={() => onSelect("beginner")}>Principiante</button>
        <button onClick={() => onSelect("advanced")}>Avanzado</button>
    </div>
);

export default ExperienceSelector;