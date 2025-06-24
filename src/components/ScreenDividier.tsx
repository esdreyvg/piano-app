import React, { ReactNode } from "react";

interface ScreenDividerProps {
    children: ReactNode[];
}

const ScreenDivider: React.FC<ScreenDividerProps> = ({ children }) => (
    <div style={{
        alignItems: "flex-start",
        marginLeft:30
    }}>
        <div style={{ flex: 1, minWidth: 0 }}>{children[0]}</div>
        <div style={{ flex: 1, minWidth: 0 }}>{children[1]}</div>
    </div>
);

export default ScreenDivider;