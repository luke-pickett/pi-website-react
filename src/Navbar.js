import { Link } from 'react-router-dom'

export default function Navbar() {
    return(
        <nav className={"nav"}>
            <Link to={"/"} className={"nav-site-title"}>Approximating &pi;</Link>
            <ul>
                <li>
                    <Link to={"/archimedes"}>Archimedes' Approximation</Link>
                </li>
                <li>
                    <a href={"taylor"} className={"nav-sub-link"}>Taylor Series</a>
                </li>
            </ul>
        </nav>
    );
}