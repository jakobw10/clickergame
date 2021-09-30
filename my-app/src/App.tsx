import React from 'react';
import './App.css';
import './Components/Settings.css'
import './Components/Bank.css'
import {Banks} from './Components/Bank';
import {Settings} from './Components/Settings'
function App():JSX.Element {
  return (<div><main>
    <Banks></Banks>
    <button>Settings</button>
    <Settings trigger={true}></Settings>
    </main>
    </div>
    

    
    
    
  );
}

export default App;
