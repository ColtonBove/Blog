import { Link } from "react-scroll";
import '../App.css';

function Navbar() {
    return(
        <nav className="navbar navbar-expand-md navbar-dark fixed-top navbar_custom">
            
            <div className="container">
                <Link className="navbar-brand brand oswald fill-out-form" activeClass="active" to="Introduction" spy={true} smooth={true} offset={-70} duration={500}>
                    Colton Bove
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse my-3">
                    <ul className="navbar-nav flex-row ml-auto">
                        <li className="nav-item mr-3">
                            <Link className="nav-link" activeClass="active" to="Introduction" spy={true} smooth={true} offset={-70} duration={500}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link" activeClass="active" to="Blog" spy={true} smooth={true} offset={-70} duration={500}>
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link" activeClass="active" to="About" spy={true} smooth={true} offset={-70} duration={500}>
                                About Me
                            </Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link" activeClass="active" to="Gallery" spy={true} smooth={true} offset={-70} duration={500}>
                                Gallery
                            </Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link" activeClass="active" to="Contact" spy={true} smooth={true} offset={-70} duration={500}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;