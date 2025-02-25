import React, { useRef, useState } from "react";
import './component.css';
import '@fontsource/corinthia';
import HeartToggle from "./invite/heartToggle";

const TitleBar = () => {
    const audioRef = useRef(new Audio("Perfect.mp3"));
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        const audio = audioRef.current;
        console.log("Toggling play: ", isPlaying);
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };
    
    return (
        <div className="title-bar">
            <h2 style={{fontFamily:"'Corinthia', cursive", fontSize:"clamp(2rem, 5vw, 6rem)"}}>Arjun & Meghana</h2>
            <HeartToggle onToggle={togglePlay}/>
        </div>
    );
};

export default TitleBar;
