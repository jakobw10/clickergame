import React from 'react';
import './App.css';
import {Bank,Shop} from "./Interfaces";

function App() {
  let bank:Bank={
    clicks:1,
  };
  return (
    <div>
      Clicks:{bank.clicks}
    </div>
  );
}

export default App;
