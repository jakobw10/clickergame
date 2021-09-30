
import { useState} from 'react';
import UseInterval from '../custom Hooks/useinterval';
export function Banks(): JSX.Element{
    let [clicks,SetClicks]=useState(0);
    let [farmers,SetFarmers]=useState(0);
    let [auto,SetAuto]=useState(0);
    let [bait,SetBait]=useState(0);
    UseInterval(
        ()=>{
            SetClicks(clicks+farmers+(2*auto)+(5*bait))},1000,

    )
    function addclick(owned:number):void{
        SetClicks(clicks+owned);
        
    }
    function enoughclicks(price:number){
        if(clicks>=price){
            return true;
        }
        else{
            alert('not enougth clicks')
            return false;
        }
    }
      function buy(price:number){
          if(enoughclicks(price)){
            SetClicks(clicks-price);
            if(price===20){
                SetFarmers(farmers+1);
            }
            if(price===50){
                SetAuto(auto+1);
            }
            if(price===100){
                SetBait(bait+1);
            }
          }
          
      }
    return <div>
        Clicks:{clicks}
        <div>
            <button onClick={()=>addclick(1)}>Click Me!</button>
        </div>
        <div>
        <div>
           SHOP 
        </div>
        <div>
            <button onClick={()=>buy(20)}> Click Farms:20 </button>Click Farms owned:{farmers}
        </div>
        <div>
            <button onClick={()=>buy(50)}> Autoclickers:50</button> Autoclickers owned:{auto}
        </div>
        <div>
            <button onClick={()=>buy(100)}> Clickbait:100</button>Clickbait owned:{bait}
        </div>
        </div>
    </div>
}