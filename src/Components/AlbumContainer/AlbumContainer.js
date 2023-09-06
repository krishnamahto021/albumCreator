import { Album } from "../Album/Album";
import styles from "./AlbumContainer.module.css";

export const AlbumContainer = () =>{
    return (
        <>
            <div className={styles.albumContainer}>
                <Album/>
            </div>
        </>
    )
}