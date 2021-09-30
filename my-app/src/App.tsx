import React, { useState } from 'react';
import './App.css';
import './Components/Settings.css'
import './Components/Bank.css'
import {Banks} from './Components/Bank';
import {Settings} from './Components/Settings'
function App():JSX.Element {
  const [popup,setPopup]=useState(false);
  const [background,setBackground]=useState('white')
  return (<div className={background}>
    <Banks></Banks>
    <button onClick={()=>setPopup(true)}>Settings</button>
    <Settings trigger={popup} setTrigger={setPopup} setColor={setBackground}></Settings>
    </div>
    

    
    
    
  );
}

export default App;
