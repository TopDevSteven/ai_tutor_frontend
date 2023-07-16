import React from "react";
import {ReactComponent as ShareIcon} from "../../../assets/icons/share.svg";
import GptChatsTopbarBtn from "../../common/GptChatsTopbarBtn";
import "./GpthubChatsTopbar.css"

const categories = [
    "All Chats",
    "Math",
    "Science",
    "Coding",
    "History",
    "Art",
    "Music",
    "Category",
]

const GpthubChatsTopbar = () => {
    return (
        <div className="topbar-container">
            <div className="topbar-header">
                <div className="topbar-name">
                    <p className="app-name">Chats</p>
                    <p className="app-explain">A lesson app that will blow your mind</p>
                </div>
                <div className="topbar-option">
                    <ShareIcon />
                    <p>share</p>
                </div>
            </div>
            <div className="gpthub-topbar-btn-container">
                {
                    categories.map((item, idx) => <GptChatsTopbarBtn label={item}/>)
                }
            </div>
        </div>
    )
}

export default GpthubChatsTopbar;