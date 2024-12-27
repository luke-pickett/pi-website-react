export default function Navbar() {
    return(
        <nav className={"nav"}>
            <a href={"home"} className={"nav-site-title"}>Approximating &pi;</a>
            <ul>
                <li>
                    <a href={"archimedes"} className={"nav-sub-link"}>Archimedes' Approximation</a>
                </li>
                <li>
                    <a href={"taylor"} className={"nav-sub-link"}>Taylor Series</a>
                </li>
            </ul>
        </nav>
    );
}