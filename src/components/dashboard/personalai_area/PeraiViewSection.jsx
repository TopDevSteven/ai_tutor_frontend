import React, { useState } from "react";
import ViewCardBox from "../../common/perai_commons/ViewCardBox";
import PeraiChatSection from "./PeraiChatSection";
import {ReactComponent as TypeDOCIcon} from "../../../assets/icons/perai_category_icons/Group (3).svg";
import {ReactComponent as TypePDFIcon} from "../../../assets/icons/perai_category_icons/Group (4).svg";
import "./PeraiViewSection.css";

const perai_cards = [
    {
        topic: "Tylers Resume",
        typeIcon: <TypeDOCIcon />,
        typeLabel: "DOC",
        status: "Ready",
        date: "08.08.23",
    },
    {
        topic: "Wellness Firm",
        typeIcon: <TypePDFIcon />,
        typeLabel: "PDF",
        status: "Ready",
        date: "08.08.23",
    },
    {
        topic: "What is Software",
        typeIcon: <TypePDFIcon />,
        typeLabel: "PDF",
        status: "Ready",
        date: "08.08.23",
    }
]

const PeraiViewSection = () => {
    const [showchat, setShowchat] = useState(false)
    const [topic, setTopic] = useState("")

    const handleShowChat = (index) => {
        setShowchat(true)
        setTopic(perai_cards[index].topic)
    }

    return (
        <div className="peraiview-container">
            {
                !showchat ?
                    <div className="peraiview-cards-container">
                        <div className="peraiview-cards-header">
                            <label className="topic">Content</label>
                            <label className="type">Type</label>
                            <label className="status">Status</label>
                            <label className="date">Date</label>
                        </div>
                        <div className="peraiview-cards">
                            {
                                perai_cards.map((item, idx) => 
                                    <ViewCardBox 
                                        key={idx}
                                        topic={item.topic}
                                        typeIcon={item.typeIcon}
                                        typeLabel={item.typeLabel}
                                        status={item.status}
                                        date={item.date}
                                        showchat={() => handleShowChat(idx)}
                                    />
                                )
                            }
                        </div>
                    </div>
                :<PeraiChatSection topic={topic}/>
            }
        </div>

    )
}

export default PeraiViewSection;