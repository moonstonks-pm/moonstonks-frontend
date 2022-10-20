import React from 'react';
import './App.css';
import Sidemenu from "./components/Sidemenu";
import Homepage from "./components/Homepage";
import {Route, Routes} from "react-router-dom";
import Metadata from "./components/Metadata";
import Edit from "./components/Edit";

export default function App() {
  return (
            <div className="App">
                <div><Sidemenu /></div>
                <div>
                    <Routes>
                        <Route path={"/"} element={<Homepage />}></Route>
                        <Route path={"/metadata"} element={<Metadata />}></Route>
                        <Route path={"/edit"} element={<Edit />}></Route>
                    </Routes>
                </div>
            </div>
  );
}
