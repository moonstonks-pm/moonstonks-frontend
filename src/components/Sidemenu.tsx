import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link
} from "react-router-dom";

import './Sidemenu.scss';
import Homepage from "./Homepage";
import Metadata from "./Metadata";

export default function Sidemenu() {
    function changeButton() {
        console.log("Button clicked!");
    }

    return (
        <div className="sidemenu">
            <div className="greeting">
                <p>Hello</p>
                <div className="name">
                    <p>Tom!</p>
                </div>
            </div>
            <ul className="sideButtons">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/metadata"}>Metadata</Link></li>
                <li><button type="button" onClick={changeButton}>Contact</button></li>
            </ul>
        </div>
    );
}