import React from "react";
import "../assets/experienceSelector.css";

interface ExperienceSelectorProps {
    onSelect: (experience: "beginner" | "advanced") => void;
}

const ExperienceSelector: React.FC<ExperienceSelectorProps> = ({ onSelect }) => (
    <div className="experience-selector-container">
        <h2 className="experience-selector-title">Selecciona tu experiencia</h2>
        <div className="experience-selector-buttons">
            <button onClick={() => onSelect("beginner")}>Principiante</button>
            <button onClick={() => onSelect("advanced")}>Avanzado</button>
        </div>
    </div>
);

export default ExperienceSelector;