import { useState} from 'react';
import {Bank} from '../Interfaces'
export function Banks(): JSX.Element{
    let [clicks,SetClicks]=useState(0);
    let [farmers,SetFarmers]=useState(0);
      function addclick():void{
        SetClicks(clicks+1);
      }
      function buy(price:number){
          SetClicks(clicks-price);
          SetFarmers(farmers+1);
      }
    return <div>
        Clicks:{clicks}
        <div>
            <button onClick={()=>addclick()}>Click Me!</button>
        </div>
        <div>
        <div>
           SHOP 
        </div>
        <div>
            <button onClick={()=>buy(20)}> Click Farms:20 </button>Click Farms owned:{}
        </div>
        <div>
            <button onClick={()=>buy(50)}> Autoclickers:50</button> Autoclickers owned:{}
        </div>
        <div>
            <button onClick={()=>buy(100)}> Clickbait:100</button>Clickbait owned:{}
        </div>
        </div>
    </div>
}