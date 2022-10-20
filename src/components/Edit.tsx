import './Edit.scss';
import Searchbar from "./Searchbar";
import Addstock from "./Addstock";


export default function Edit () {
    return (
        <div className="edit">
            <Searchbar />
            <div className="editStock">
                <Addstock />
            </div>
        </div>
    );
}