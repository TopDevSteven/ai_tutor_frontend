import React, { useCallback, useState } from "react";
import GpthubCategorySection from "./GpthubCategorySection";
import MessageInputBox from "../../common/MessageInputBox";
import "./GpthubArea.css"
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const gpthubEndpoints = [
    "math",
    "science",
    'coding',
    'history',
    'art',
    'music',
    'travel',
    'allchats'
]

const GpthubArea = ({gpthubcategory, handleGpthubcategory}) => {
    const [query, setQuery] = useState("")
    const navigate = useNavigate()
    const handleChangeQuery = (message) => {
        setQuery(message)
    }
    const handleSendQuery = async () => {
        const xhr = new XMLHttpRequest();
        if(query.trim() != "" && gpthubcategory != null){
            navigate("/userdashboard/gpt_hub/chats")
            // axios.post(
            //     `/api/gpt_hub/chat/${gpthubEndpoints[gpthubcategory]}`, 
            //     {message: query}
            // ).then(res => {
            //     console.log(res.data)
            // }).catch(error => {
            //     console.log("Failed")
            // })

            xhr.open('POST', `/api/gpt_hub/chat/${gpthubEndpoints[gpthubcategory]}`, true);
            xhr.setRequestHeader("Content-Type", "application/json")

            xhr.onprogress = () => {
                const rawResult = xhr.responseText;
                let temp = "";
                const jsonStrs = rawResult.split('}{').map((str, idx, arr) => {
                    if (idx !== 0) str = '{' + str;
                    if (idx !== arr.length - 1) str = str + '}';
                    return str;
                })

                jsonStrs.forEach(jsonStrs => {
                    try {
                        const data = JSON.parse(jsonStrs);
                        const content = data?.choices[0]?.delta?.content || "";
                        temp = temp + content;
                    } catch (e) {
                        console.error(e);
                    }
                })
                console.log(temp)
            }

            const body = JSON.stringify({message: query})
            xhr.send(body);
            setQuery("")
        }
    }
    return (
        <div className="workarea-container">
            <div className="gpthub-container">
                {/* <GpthubCategorySection 
                    gpthubcategory={gpthubcategory}
                    handleGpthubcategory={handleGpthubcategory}
                /> */}
                <Outlet />
                <MessageInputBox query={query} onChat={handleSendQuery} onChange={handleChangeQuery}/>
            </div>
        </div>
    )
}

export default GpthubArea;