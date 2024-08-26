import "../styles/ControlToggle.css";

export default function ControlToggle({name}) {
    const _name = `switch-${name}`;
    
    const handleToggle = (event) => {
        console.log(`${_name} is toggled ${event.target.checked}`);
    }

    return (
        <div className="cpElement">
            <span className="cpLabel">{name}</span>       
            <input type="checkbox"
                    onChange={handleToggle}
                    id={_name}
                    className="checkbox" />
            <label htmlFor={_name} className="toggle"/>
        </div>
    )
}
