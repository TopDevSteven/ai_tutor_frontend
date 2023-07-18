import React from "react";
import "./PeraiCreateSection.css"
import { useState } from "react";
import {ReactComponent as UploadIcon} from "../../../assets/icons/perai_category_icons/upload.svg";

const PeraiCreateSection = () => {
    const [fileName, setFileName] = useState('Choose a file');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
        if (file) {
        setFileName(file.name);
        } else {
        setFileName('Choose a file');
        }
    };
    return (
        <div className="peraicreate-container">
            <div className="input-topic-container">
                <div className="input-topic-header">
                    <h1>Topic Title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u.</p>
                </div>
                <div className="input-topic-box">
                    <input />
                </div>
            </div>
            <div class="custom-file-upload">
                <h1>Upload Content</h1>
                <p>Select which users can access and view this project. Only users with access can view and edit the project.</p>
                <input type="file" id="fileUpload" class="inputfile" onChange={handleFileChange}/>
                <label for="fileUpload">
                    <span class="icon"><UploadIcon /></span>
                    {fileName !== 'Choose a file' ?
                        <p class="filename">Selected file: {fileName}</p>
                        : <p class="filename">Upload Document</p>
                    }
                    <p class="browse">File formats: PDF, Doc, CSV</p>
                    <p>{fileName}</p>
                </label>
            </div>
        </div>
    )
}

export default PeraiCreateSection;