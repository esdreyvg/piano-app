import React from "react";

interface PianoOwnershipProps {
    onAnswer: (hasPiano: boolean) => void;
}

const PianoOwnership: React.FC<PianoOwnershipProps> = ({ onAnswer }) => (
    <div style={{ padding: 32 }}>
        <h2>¿Tienes un piano físico?</h2>
        <button onClick={() => onAnswer(true)}>Sí</button>
        <button onClick={() => onAnswer(false)}>No</button>
    </div>
);

export default PianoOwnership;