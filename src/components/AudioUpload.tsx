import React, { useRef, useState } from "react";
import axios from "axios";

interface Note {
    pitch: number;
    time: number;
    confidence?: number;
    frequency?: number;
}

interface AudioUploadProps {
    onNotesDetected: (notes: Note[]) => void;
}

// Usa variable de entorno para la URL del backend Python
const API_BASE_URL = import.meta.env.VITE_PYTHON_API_URL || "http://localhost:8001";

const AudioUpload: React.FC<AudioUploadProps> = ({ onNotesDetected }) => {
    const fileInput = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState(false);

    const handleUpload = async () => {
        if (!fileInput.current || !fileInput.current.files?.length) return;
        setLoading(true);
        const formData = new FormData();
        formData.append("file", fileInput.current.files[0]);
        try {
            const { data } = await axios.post(`${API_BASE_URL}/analyze`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            onNotesDetected(data.notes || []);
        } catch (e) {
            alert("Ocurrió un error al procesar el audio");
        }
        setLoading(false);
    };

    return (
        <div>
            <input type="file" accept="audio/wav" ref={fileInput} />
            <button onClick={handleUpload} disabled={loading}>
                {loading ? "Procesando..." : "Subir y Analizar"}
            </button>
        </div>
    );
};

export default AudioUpload;