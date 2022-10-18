import React from 'react';
import './App.css';
import Sidemenu from "./components/Sidemenu";
import Homepage from "./components/Homepage";
import Piechart from "./components/Piechart";

function App() {
  return (
    <div className="App">
        <div><Sidemenu /></div>
        <div>
            <Homepage />
        </div>
    </div>
  );
}

export default App;
