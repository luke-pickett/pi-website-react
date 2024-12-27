import { Link } from 'react-router-dom'

export default function Navbar() {
    return(
        <nav className={"nav"}>
            <Link to={"/"} className={"nav-site-title"}>Approximating &pi;</Link>
            <ul>
                <li>
                    <Link to={"/archimedes"} className={"nav-sub-link"}>Archimedes' Approximation</Link>
                </li>
                <li>
                    <Link to={"/taylor"} className={"nav-sub-link"}>Taylor Series</Link>
                </li>
            </ul>
        </nav>
    );
}