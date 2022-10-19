import "./Homepage.scss"
import Piechart from "./Piechart";
import Searchbar from "./Searchbar";
import React from "react";
import Linechart from "./Linechart";


export default function Homepage() {
    return (
        <div className="homescreen">
            <div className="searchbar">
                <Searchbar />
            </div>
            <div className="infos">
                <Piechart />
            </div>
            <div className="info">
                <h1>Toms Portfolio</h1>
                <p>2 Assets</p>
                <p>&#x2022;</p>
                <p>3 Holdings</p>
                <p>&#x2022;</p>
                <p>EUR</p>
            </div>
            <div className="overview">
                <div className="general">
                    <p>General overview</p>
                    <div className="up">
                        <p>&#129045;69%</p>
                    </div>

                </div>
                <h2>69.757€</h2>
                <div className="revenue">
                    <p>Revenue:</p>
                    <h2>2662,22€</h2>
                    <p>Dividends: <div className="dividends">43,65€</div></p>
                </div>
            </div>
            <div className="linechart">
                <Linechart />
            </div>

        </div>
    );
}