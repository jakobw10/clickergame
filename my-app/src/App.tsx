import React,{useState} from 'react';
import './App.css';
import {Bank,Shop} from "./Interfaces";
import {Banks} from './Components/Bank';
import {Shops} from './Components/Shops';
import { setConstantValue } from 'typescript';
function App():JSX.Element {
  return (<div>
    <Banks></Banks>
    <Shops></Shops>
    </div>
    

    
    
    
  );
}

export default App;
