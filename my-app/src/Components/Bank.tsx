import { useState} from 'react';
import {Bank} from '../Interfaces'
export function Banks(): JSX.Element{
    let [count,SetCount]=useState(0);
      function addclick():void{
        SetCount(count+1);
      }
    return <div>
        Clicks:{count}
        <div>
            <button onClick={()=>addclick()}>Click Me!</button>
        </div>
        <div>
        <div>
           SHOP 
        </div>
        <div>
            <button> Click Farms:20 </button>Click Farms owned:{}
        </div>
        <div>
            <button> Autoclickers:50</button> Autoclickers owned{}
        </div>
        <div>
            <button> Clickbait:100</button>Clickbait owned{}
        </div>
        </div>
    </div>
}