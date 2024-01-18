// Imports
import { useRef } from "react";
import {faBars, faTimes} from "react-icons/fa";

// Navbar Function
function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive.nav");
    }

    return (
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">About</a>
                <a href="/#">Portfolio</a>
                <a href="/#">Services</a>
                <a href="/#">Contact</a>
                <button>
                    <faTimes/>
                </button>
            </nav>
            <button>
                <FaBars />
            </button>
       </header>
    )
}
export default Navbar;
