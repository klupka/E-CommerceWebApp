// CSS Imports
import "../css/navbar.css";
// Library Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faCartShopping,
    faUser,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <>
            <ul className="navbar">
                <li className="navbar__site-logo">
                    <a href="/">AUDIO ARCHITECTS</a>
                </li>
                <li className="navbar__links">
                    <a className="navbar__links-item" href="">
                        PRODUCTS
                    </a>
                    <a className="navbar__links-item" href="">
                        SUPPORT
                    </a>
                    <a className="navbar__links-item" href="">
                        ABOUT
                    </a>
                </li>
                <li className="navbar__icons">
                    <a className="navbar__icons-item" href="">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </a>
                    <a className="navbar__icons-item" href="">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </a>
                    <a className="navbar__icons-item" href="">
                        <FontAwesomeIcon icon={faUser} />
                    </a>
                </li>
            </ul>
        </>
    );
};

export default Navbar;
