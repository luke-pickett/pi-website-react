import styles from "./GeogebraComponent.module.css"



export default function GeogebraComponent(props) {
    return(
        <div style={styles}>
            <iframe src={props.srcLink}></iframe>
        </div>
    );
}