import React, { createContext, useState } from "react";
import Topbar from "./Topbar";
import LessonChat from "./LessonChat";
import ChatUI from "./ChatUI";
import MessageInput from "./MessageInput";
import "./LessonArea.css"

export const LessonContext = createContext();

const WorkingArea = () => {
    const [eduStyle, setEduStyle] = useState({
        "Depth": "Elmentary",
        "Learning Style": "Visual",
        "Communication Style": "Formal",
        "Tone Style": "Encouraging",
        "Reasoning Framework": "Deductive"
    });

    const [activetab, setActivetab] = useState("topbar-tab1");
    const [userMessage, setUserMessage] = useState("")
    const [messageHistory, setMessageHistory] = useState([])

    const handleClickTab = async (tab) => {
        if (tab === "topbar-tab2"){
            setActivetab(tab)
            const response = await fetch("/api/lesson_style/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    depth: eduStyle["Depth"],
                    learning_style: eduStyle["Learning Style"],
                    communication_style: eduStyle["Communication Style"],
                    tone_style: eduStyle["Tone Style"],
                    reasoning_framework: eduStyle["Reasoning Framework"],
                })
            })
    
            if(response.ok) {
                setActivetab(tab)
            }
        } else {
            setActivetab(tab)
        }
    }

    return (
        <div className="workarea-container">
            <div className="working-area">
                <LessonContext.Provider 
                value={{ 
                    eduStyle, setEduStyle, 
                    userMessage, setUserMessage,
                    messageHistory, setMessageHistory
                }}
                >
                    <Topbar 
                        activetab={activetab}
                        onClick={handleClickTab}
                    />
                    {activetab === "topbar-tab1" ? <LessonChat /> : <ChatUI />}
                    <div className="input-container">
                        <MessageInput activetab={activetab}/>
                    </div>
                </LessonContext.Provider>
            </div>
        </div>
    )
}

export default WorkingArea;