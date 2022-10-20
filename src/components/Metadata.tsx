import './Metadata.scss';
import Searchbar from "./Searchbar";
import Piemetadata from "./Piemetadata";
import Datalist from "./Datalist";

export default function Metadata () {
    return (
        <div className="metadata">
            <Searchbar />
            <div className="list"><Datalist /></div>
            <div className="piemeta"><Piemetadata /></div>
        </div>
    );
}