import {Bank} from '../Interfaces'
export function Banks(): JSX.Element{
    let bank:Bank={
        clicks: 0,
      };
      function addclick(bank:Bank):void{
        bank.clicks=bank.clicks+1;
        alert(bank.clicks)
      }
    return <div>
        Clicks:{bank.clicks}
        <div>
            <button onClick={()=>addclick(bank)}>Click Me!</button>
        </div>
    </div>
}