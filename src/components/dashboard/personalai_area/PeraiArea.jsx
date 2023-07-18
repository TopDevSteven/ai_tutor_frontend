import React, { useState } from "react";
import PeraiTopbar from "./PeraiTopbar";
import PeraiCategorySection from "./PeraiCategorySection";
import PeraiViewSection from "./PeraiViewSection";
import PeraiCreateSection from "./PeraiCreateSection";
import MessageInputBox from "../../common/MessageInputBox";
import "./PeraiArea.css"

const PeraiArea = () => {
    const [selectedBtn, setSelectedBtn] = useState(null)

    const handleSeletecBtn = (idx) => {
        setSelectedBtn(idx)
        console.log(idx)
    }
    
    return (
        <div className="workarea-container">
            <div className="perai-container">
                <PeraiTopbar selectedBtn={selectedBtn} handleSeletecBtn={handleSeletecBtn} />
                {
                    selectedBtn === null && <PeraiCategorySection />
                }
                {
                    selectedBtn === 0 && <PeraiViewSection />
                }
                {
                    selectedBtn === 1 && <PeraiCreateSection />
                }
                <MessageInputBox />
            </div>
        </div>
    )
}

export default PeraiArea;