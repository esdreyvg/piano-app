import React from "react";
import "./../assets/pianoQuestion.css";

interface CameraQuestionProps {
  onAnswer: (hasCamera: boolean) => void;
}

const CameraQuestion: React.FC<CameraQuestionProps> = ({ onAnswer }) => (
  <div className="piano-question-container">
    <h2 className="piano-question-title">¿Tienes una cámara web?</h2>
    <div className="piano-question-buttons">
      <button onClick={() => onAnswer(true)}>Sí</button>
      <button onClick={() => onAnswer(false)}>No</button>
    </div>
  </div>
);

export default CameraQuestion;
