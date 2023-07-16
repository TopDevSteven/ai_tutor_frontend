import React from "react";
import Sidebar from "../components/dashboard/Sidebar";
import "./DashboardPage.css"
// import WorkingArea from "../components/dashboard/lessonapp_area/LessonArea";
// import GpthubArea from "../components/dashboard/gpthub_area/GpthubArea";
import { Routes, Route, Outlet } from "react-router-dom";

const DashboardPage = () => {
    return (
        <div className="d-flex">
            <div className="sidebar-container">
                <Sidebar />
            </div>
            <Outlet />
        </div>
    )
}

export default DashboardPage;