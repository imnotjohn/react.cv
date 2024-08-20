import "../styles/ControlToggle.css";

export default function ControlToggle({name}) {
    return (
        <div className="cpElement">
            <span className="cpLabel">{name}</span>       
            <span className="cpButton">X</span>         
        </div>
    )
}
