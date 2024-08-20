import { useState, useRef, useEffect } from "react";
import "../styles/ControlPanel.css";

import ControlToggle from "./ControlToggle";

export default function ControlPanel({cpInputs}) {
    let [visibility, setVisibility] = useState(false);
    const cPanel = useRef();

    const handleKeyDown = (event) => {
        event.preventDefault();

        if (event.key == "i" || event.key == "m" || event.key == "c") {
            setVisibility(v => !v);
        }
    }

    useEffect( () => {
        window.addEventListener("keydown", handleKeyDown);
    }, [])

    return (
        <div id="cp" onKeyDown={handleKeyDown} ref={cPanel} tabIndex={0} style={{opacity: `${visibility ? "1.0" : "0.0"}`}}>
            <div className="cpTitle">controls</div>
            {
                cpInputs.map((input, i) => (
                    <ControlToggle name={input} key={i} />
                ))
            }
        </div>
    )
}
