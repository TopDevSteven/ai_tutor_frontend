import React from "react";
import GpthubChatsTopbar from "./GpthubChatsTopbar";
import GpthubChatArea from "./GpthubChatArea";

const GpthubChatsSection = () => {
    return (
        <div className="gpthubcategory-container">
            <GpthubChatsTopbar />
            <GpthubChatArea />
        </div>
    )
}

export default GpthubChatsSection