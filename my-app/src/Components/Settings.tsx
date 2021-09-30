import './Settings.css'
export function Settings(props: { trigger: any; setTrigger: (arg0: boolean) => void }):JSX.Element{
    return (props.trigger) ? (
        <div className="settings">
            <div className="dropdown">

            <button className="dropbtn">Background Color:</button>
            <div className="dropdown-content">
                <button>blue</button>
                <button>red</button>
                <button>green</button>
            </div>
            </div>
            <button className="close" onClick={()=> props.setTrigger(false)}>Close Settings</button>
        </div>
    ):<div>
    </div>
}
export default Settings
