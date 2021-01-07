import '../App.css';
import {
    Link
  } from "react-router-dom";

function Navbarblog() {
    return(
        <nav className="navbar navbar-expand-md navbar-dark fixed-top navbar_custom">
            
            <div className="container">
                <Link to="/" className="navbar-brand brand oswald fill-out-form">
                    Colton Bove
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse my-3">
                    <ul className="navbar-nav flex-row ml-auto">
                        <li className="nav-item mr-3">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link to="/" className="nav-link">
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link to="/" className="nav-link" activeClass="active">
                                About Me
                            </Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link to="/" className="nav-link">
                                Gallery
                            </Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link to="/" className="nav-link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbarblog;