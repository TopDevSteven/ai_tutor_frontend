import React from "react";
import GpthubChatsTopbar from "./GpthubChatsTopbar";
import GpthubChatArea from "./GpthubChatArea";
import "./GpthubChatSection.css"

const GpthubChatsSection = ({idx}) => {
    return (
        <div className="gpthubcategory-container">
            <GpthubChatsTopbar idx={idx}/>
            <div className="gpthub-chatarea-container">
                <GpthubChatArea />
            </div>
        </div>
    )
}

export default GpthubChatsSection