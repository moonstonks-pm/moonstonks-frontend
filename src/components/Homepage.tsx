import "./Homepage.scss"
import Piechart from "./Piechart";


export default function Homepage() {
    return (
        <div className="homescreen">
            <div className="infos">
                <Piechart />
            </div>
        </div>
    );
}