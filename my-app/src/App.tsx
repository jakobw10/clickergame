import React, { useState } from 'react';
import './App.css';
import './Components/Settings.css'
import './Components/Bank.css'
import {Banks} from './Components/Bank';
import {Settings} from './Components/Settings'
function App():JSX.Element {
  const [popup,setPopup]=useState(false);
  const [background,setBackground]=useState()
  return (<div>
    <Banks></Banks>
    <button onClick={()=>setPopup(true)}>Settings</button>
    <Settings trigger={popup} setTrigger={setPopup}></Settings>
    </div>
    

    
    
    
  );
}

export default App;
