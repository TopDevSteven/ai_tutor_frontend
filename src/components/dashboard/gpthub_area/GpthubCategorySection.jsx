import React from "react";
import "./GpthubCategorySection.css"
import GptHubCategoryBox from "../../common/GptHubCategoryBox";
import GptHubTopbar from "./GptHubTopbar";
import {ReactComponent as MathIcon} from "../../../assets/icons/gpthub-math.svg"
import {ReactComponent as ScienceIcon} from "../../../assets/icons/science.svg"
import {ReactComponent as GptHubCodeIcon} from "../../../assets/icons/gpthub-code.svg"
import {ReactComponent as GptHubHistoryIcon} from "../../../assets/icons/gpthub-history.svg"
import {ReactComponent as GptHubArtIcon} from "../../../assets/icons/gpthub-art.svg"
import {ReactComponent as GptHubMusicIcon} from "../../../assets/icons/gpthub-music.svg"
import {ReactComponent as GptHubCategoryIcon} from "../../../assets/icons/gpthub-category.svg"
import {ReactComponent as GptHubAllchatIcon} from "../../../assets/icons/gpthub-allchats.svg"

const gpthubScienceCategories = [
    { 
        icon: <MathIcon />,
        category: "Math",
        explain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor ."
    },
    { 
        icon: <ScienceIcon />,
        category: "Science",
        explain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor ."
    },
    { 
        icon: <GptHubCodeIcon />,
        category: "Coding",
        explain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor ."
    },
    { 
        icon: <span><GptHubHistoryIcon /></span>,
        category: "History",
        explain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor ."
    },
    { 
        icon: <GptHubArtIcon />,
        category: "Art",
        explain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor ."
    },
    { 
        icon: <GptHubMusicIcon />,
        category: "Music",
        explain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor ."
    },
    { 
        icon: <span><GptHubCategoryIcon /></span>,
        category: "Category",
        explain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor ."
    },
    { 
        icon: <GptHubAllchatIcon />,
        category: "AllChats",
        explain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor ."
    }
]

const GpthubCategorySection = ({gpthubcategory, handleGpthubcategory}) => {
    return (
        <div className="gpthubcategory-container">
            <GptHubTopbar />
                <div className="gpthub-category-container">
                    <div className="gpthub-category-header">
                        <h1>Ed Tech Platform</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .</p>
                    </div>
                </div>
                <div className="gpthubcategory-wrapper">
                    {
                        gpthubScienceCategories.map((item, idx) => 
                            <GptHubCategoryBox
                                key={idx}
                                icon={item.icon}
                                category={item.category}
                                explain={item.explain}
                                isSelected={gpthubcategory == idx}
                                onClick={() => handleGpthubcategory(idx)}
                            />
                        )
                    }
            </div>
        </div>
    )
}

export default GpthubCategorySection;