import styles from "./SocialLink.module.css"

export default function SocialLink(props) {
    return(
        <span style={styles}>
            <a href={props.socialLink} target={"_blank"}><img src={props.imageFile} alt={"A media link to " + props.socialLink}></img></a>
        </span>
    );
}