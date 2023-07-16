import React from "react";
import "./GptChatsTopbarBtn.css"

const GptChatsTopbarBtn = ({label}) => {
    return (
        <div className="gpthub-topbar-btn">
            <button>{label}</button>
        </div>
    );
};

export default GptChatsTopbarBtn;