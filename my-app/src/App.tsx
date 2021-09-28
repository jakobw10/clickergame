import React from 'react';
import './App.css';
import {Bank,Shop} from "./Interfaces";

class BankClass implements Bank{
  clicks:number;
  constructor(){
    this.clicks=0;
  }

}
function App():JSX.Element {
  let bank:BankClass={
    clicks: 0,
  };
  function addclick(bank:BankClass):void{
    bank.clicks=bank.clicks+1;
    
  }
  return (
    <div>
      Clicks:{bank.clicks}
      <div>
      <button onClick={()=>addclick(bank)}>
        Click Me!
      </button>
      </div>
    </div>
    
    
    
  );
}

export default App;
