import React from "react";
import GptChatsCardBox from "../../common/gpthub_commons/GptChatsCardBox";
import {ReactComponent as AglesIcon} from "../../../assets/icons/gpthub_cards_icons/Vector.svg";
import {ReactComponent as FunctionsIcon} from "../../../assets/icons/gpthub_cards_icons/Group.svg";
import {ReactComponent as GeometryIcon} from "../../../assets/icons/gpthub_cards_icons/Geometry.svg";
import {ReactComponent as AlgebraIcon} from "../../../assets/icons/gpthub_cards_icons/Group 936.svg";
import {ReactComponent as FractionsIcon} from "../../../assets/icons/gpthub_cards_icons/Group 937.svg";
import {ReactComponent as PowerIcon} from "../../../assets/icons/gpthub_cards_icons/gpthub-rocket.svg";
import {ReactComponent as Functions2Icon} from "../../../assets/icons/gpthub_cards_icons/gpthub-rocket.svg";
import {ReactComponent as CalculsIcon} from "../../../assets/icons/gpthub_cards_icons/calculs.svg";
import "./GpthubChatArea.css"
    
// const gpthub_cards = [
//     {
//         icon: <AglesIcon />,
//         label: "Agles",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Duis at"
//     },
//     {
//         icon: <FunctionsIcon />,
//         label: "Functions",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Duis at"
//     },
//     {
//         icon: <GeometryIcon />,
//         label: "GeometryIcon",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Duis at"
//     },
//     {
//         icon: <AlgebraIcon />,
//         label: "Algebra",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Duis at"
//     },
//     {
//         icon: <FractionsIcon />,
//         label: "Fractions",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Duis at"
//     },
//     {
//         icon: <PowerIcon />,
//         label: "Powers & Roots",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Duis at"
//     },
//     {
//         icon: <Functions2Icon />,
//         label: "Functions",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Duis at"
//     },
//     {
//         icon: <CalculsIcon />,
//         label: "Calculus",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Duis at"
//     }
// ]

const GpthubChatArea =  () => {
    return (
        <div className="gpthub-selectcard-container">
            {/* {
                gpthub_cards.map((item, idx) => 
                    <GptChatsCardBox
                        icon={item.icon}
                        label={item.label}
                        description={item.description}
                    />
                )
            } */}
        </div>
    );
};

export default GpthubChatArea;