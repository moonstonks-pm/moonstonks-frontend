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
                <li><button><Link to={"/"}>Home</Link></button></li>
                <li><button><Link to={"/metadata"}>Metadata</Link></button></li>
                <li><button><Link to={"/edit"}>Portfolio</Link></button></li>
            </ul>
        </div>
    );
}