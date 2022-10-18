import './Sidemenu.scss';

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
                <li><button type="button" onClick={changeButton}>Home</button></li>
                <li><button type="button" onClick={changeButton}>About</button></li>
                <li><button type="button" onClick={changeButton}>Contact</button></li>
            </ul>
        </div>
    );
}