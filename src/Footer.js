import SocialLink from "./SocialLink/SocialLink";
import linkedinIcon from "./images/linkedin_logo.png"
import githubIcon from "./images/github_mark_white.png"

function Footer() {
    return(
        <footer>
            <div className={"top-footer-container"}>
                <p>This is a footer</p>
                <p>More</p>
                <span>
                    <SocialLink socialLink={"https://www.linkedin.com/in/luke-pickett/"} imageFile={linkedinIcon}/>
                    <SocialLink socialLink={"https://github.com/luke-pickett"} imageFile={githubIcon}/>
                </span>
            </div>
            <div className={"bottom-footer-container"}>
                <p><a href={"https://react.dev/"} target={"_blank"}>React</a></p>
                <p><a href={"https://www.geogebra.org/calculator"} target={"_blank"}>Geogebra</a></p>
            </div>
        </footer>
    );
}

export default Footer