import './Settings.css'
export function Settings(props: { trigger: any; }):JSX.Element{
    return (props.trigger) ? (
        <div className="settings">
            test
            <button className="close">Close Settings</button>
        </div>
    ):<div>
    </div>
}
export default Settings
