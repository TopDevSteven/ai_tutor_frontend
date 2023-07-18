import React, { useState } from "react";
import "./WorkingSpace.css"
import {ReactComponent as SquareIcon} from "../../../assets/icons/square.svg"
import {ReactComponent as TriangleIcon} from "../../../assets/icons/triangle.svg"
import {ReactComponent as OctagonIcon} from "../../../assets/icons/octagon.svg"
import {ReactComponent as AnalyticsIcon} from "../../../assets/icons/dashbaord.svg"
import {ReactComponent as PerformanceIcon} from "../../../assets/icons/Star.svg"
import {ReactComponent as TestlabIcon} from "../../../assets/icons/bulb.svg"
import { Link } from "react-router-dom";

const WorkingSpace = () => {
    const [selected, setSelected] = useState(1)

    const handleSidbar = (index) => {
        setSelected(index)
    }
    return (
        <div className="working-container">
            <div className="learning-container">
                <div className="learning-header-container">
                    <p className="workingspace-header-text">LEARNING SPACES</p>
                </div>
                <div className="learning-list-container">
                    <ul className="learning-list">
                        <li>
                            <Link to={"/userdashboard/lesson_app"} onClick={() => setSelected(0)} className={`menu-btn-standard ${selected === 0 ? 'active': ''}`}><SquareIcon className="learn-icon"/>Learning App</Link>
                        </li>
                        <li>
                            <Link to={"/userdashboard/gpt_hub"} onClick={() => setSelected(1)} className={`menu-btn-standard ${selected === 1 ? 'active': ''}`}><TriangleIcon className="gpthub_icon"/>GPT-Hub</Link>
                        </li>
                        <li>
                            <Link to={"/userdashboard/personal_ai"} onClick={() => setSelected(2)} className={`menu-btn-standard ${selected === 2 ? 'active': ''}`}><SquareIcon className="personal_ai_icon"/>Personal AI-GPT</Link>
                        </li>
                        <li><a href="#" className="menu-btn-standard"><OctagonIcon className="booking_icon"/>Exam Booking App</a></li>
                    </ul>
                </div>
            </div>
            <div className="achievement-container">
                <div>
                    <p className="achievement-header-text">ACHIEVENMENT SPACES</p>
                </div>
                <div className="achievement-list-container">
                    <ul className="achievement-list">
                        <li><a href="#"><AnalyticsIcon  className="analytics-icon"/>Analytics</a></li>
                        <li><a href="#"><PerformanceIcon className="performance-icon"/>Performance</a></li>
                        <li><a href="#"><TestlabIcon className="testlab-icon"/>TestLab</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WorkingSpace;