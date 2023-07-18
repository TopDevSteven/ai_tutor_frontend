import React from "react";
import "./PeraiChatSection.css"

const PeraiChatSection = ({topic}) => {
    return (
        <div className="peraichat-container">
            <h1>Topic: {topic}</h1>
        </div>
    );
};

export default PeraiChatSection;