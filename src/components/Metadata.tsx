import './Metadata.scss';
import Searchbar from "./Searchbar";
import Piemetadata from "./Piemetadata";

export default function Metadata () {
    return (
        <div className="metadata">
            <Searchbar />
            <Piemetadata />
        </div>
    );
}