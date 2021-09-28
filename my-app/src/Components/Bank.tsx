import { useState} from 'react';
import {Bank} from '../Interfaces'
export function Banks(): JSX.Element{
    const [count,SetCount]=useState(0);
      function addclick():void{
        SetCount(count+1);
      }
    return <div>
        Clicks:{count}
        <div>
            <button onClick={()=>addclick()}>Click Me!</button>
        </div>
    </div>
}